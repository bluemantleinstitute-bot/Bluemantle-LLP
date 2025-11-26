import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface MarketData {
  index: string;
  value: number;
  change: number;
  changePercent: number;
}

export const MarketTicker = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { index: "NIFTY 50", value: 24857.30, change: 234.50, changePercent: 0.95 },
    { index: "SENSEX", value: 82890.94, change: 692.27, changePercent: 0.84 },
    { index: "BANK NIFTY", value: 53234.85, change: -156.30, changePercent: -0.29 },
    { index: "NIFTY IT", value: 42876.15, change: 445.80, changePercent: 1.05 },
    { index: "NIFTY FMCG", value: 56234.20, change: 178.45, changePercent: 0.32 },
    { index: "NIFTY AUTO", value: 23456.80, change: -89.50, changePercent: -0.38 },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const [marketNews] = useState([
    "🔥 IT stocks rally on strong Q4 earnings outlook",
    "💹 Banking sector shows resilience amid global volatility",
    "📈 FII inflows boost market sentiment across sectors",
    "⚡ Pharma stocks gain momentum on export demand",
    "🎯 Auto sector rebounds with improved sales numbers",
    "💰 Market capitalisation hits new all-time high",
  ]);

  const fetchMarketData = async () => {
    try {
      console.log('Fetching real-time market data...');
      
      const { data, error } = await supabase.functions.invoke('fetch-market-data', {
        body: {},
      });

      if (error) {
        console.error('Error fetching market data:', error);
        return;
      }

      if (data?.success && data?.data) {
        console.log('Market data updated successfully');
        setMarketData(data.data);
        setLastUpdate(new Date());
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchMarketData();

    // Refresh every 60 seconds (Yahoo Finance has rate limits)
    const interval = setInterval(() => {
      fetchMarketData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-slate-950 via-navy-dark to-slate-950 border-y border-secondary/20 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-primary/5 to-secondary/5 animate-pulse" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent animate-shimmer" />

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Live Indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
              <Activity size={14} className="animate-pulse" />
              {isLoading ? 'Loading...' : 'Live Market Data'}
            </span>
          </div>
          {lastUpdate && (
            <span className="text-xs text-muted-foreground">
              Updated: {lastUpdate.toLocaleTimeString()}
            </span>
          )}
        </div>

        {/* Market Indices - Horizontal Scroll */}
        <div className="relative mb-6">
          <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
            {marketData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`flex-shrink-0 rounded-lg px-6 py-4 min-w-[220px] backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                  item.change >= 0 
                    ? "bg-green-500/10 border-green-500/30 hover:border-green-500/50 glow-green" 
                    : "bg-red-500/10 border-red-500/30 hover:border-red-500/50 glow-red"
                }`}
              >
                <div className="text-xs font-semibold text-secondary/80 mb-1 uppercase tracking-wide">
                  {item.index}
                </div>
                <div className="flex items-baseline gap-3">
                  <motion.span 
                    key={item.value}
                    initial={{ scale: 1.1, color: item.change >= 0 ? "#22c55e" : "#ef4444" }}
                    animate={{ scale: 1, color: "#ffffff" }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-black text-foreground"
                  >
                    {item.value.toFixed(2)}
                  </motion.span>
                  <div className={`flex items-center gap-1.5 text-sm font-bold ${
                    item.change >= 0 ? "text-green-400" : "text-red-400"
                  }`}>
                    <motion.div
                      animate={{ y: item.change >= 0 ? [-2, 0] : [2, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {item.change >= 0 ? (
                        <TrendingUp size={18} className="drop-shadow-glow" />
                      ) : (
                        <TrendingDown size={18} className="drop-shadow-glow" />
                      )}
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="leading-tight">
                        {item.change >= 0 ? "+" : ""}
                        {item.change.toFixed(2)}
                      </span>
                      <span className="text-xs leading-tight">
                        ({item.changePercent >= 0 ? "+" : ""}
                        {item.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market News Ticker - Infinite Scroll */}
        <div className="relative overflow-hidden rounded-lg bg-navy-dark/50 backdrop-blur-sm border border-border/20 py-3">
          <div className="flex gap-12 animate-scroll">
            {[...marketNews, ...marketNews, ...marketNews].map((news, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-foreground/90 font-medium whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-cyan animate-pulse" />
                <span>{news}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  );
};
