import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MarketData {
  index: string;
  value: number;
  change: number;
  changePercent: number;
}

// NSE symbol mappings
const SYMBOLS = {
  'NIFTY 50': '^NSEI',
  'SENSEX': '^BSESN',
  'BANK NIFTY': '^NSEBANK',
  'NIFTY IT': '^CNXIT',
  'NIFTY FMCG': '^CNXFMCG',
  'NIFTY AUTO': '^CNXAUTO',
};

async function fetchStockData(symbol: string): Promise<any> {
  try {
    console.log(`Fetching data for ${symbol}...`);
    
    // Using Yahoo Finance API
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${symbol}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    if (!data.chart?.result?.[0]) {
      console.error(`No data in response for ${symbol}`);
      return null;
    }

    const result = data.chart.result[0];
    const meta = result.meta;
    const quote = result.indicators.quote[0];

    // Get the latest values
    const currentPrice = meta.regularMarketPrice || meta.previousClose || 0;
    const previousClose = meta.chartPreviousClose || meta.previousClose || currentPrice;
    const change = currentPrice - previousClose;
    const changePercent = previousClose !== 0 ? (change / previousClose) * 100 : 0;

    console.log(`Successfully fetched ${symbol}: ${currentPrice}`);

    return {
      value: currentPrice,
      change: change,
      changePercent: changePercent,
    };
  } catch (error) {
    console.error(`Error fetching ${symbol}:`, error);
    return null;
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting market data fetch...');
    
    const marketData: MarketData[] = [];

    // Fetch all symbols in parallel
    const fetchPromises = Object.entries(SYMBOLS).map(async ([name, symbol]) => {
      const data = await fetchStockData(symbol);
      
      if (data) {
        return {
          index: name,
          value: data.value,
          change: data.change,
          changePercent: data.changePercent,
        };
      }
      
      // Return fallback data if fetch fails
      return {
        index: name,
        value: 0,
        change: 0,
        changePercent: 0,
      };
    });

    const results = await Promise.all(fetchPromises);
    marketData.push(...results);

    console.log('Market data fetch completed successfully');

    return new Response(
      JSON.stringify({ 
        success: true,
        data: marketData,
        timestamp: new Date().toISOString(),
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in fetch-market-data function:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: errorMessage,
        data: [],
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
