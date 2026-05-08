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

interface MarketDataResponse {
  success?: boolean;
  data?: MarketData[];
}

const fallbackMarketData: MarketData[] = [
  { index: "NIFTY 50", value: 24857.30, change: 234.50, changePercent: 0.95 },
  { index: "SENSEX", value: 82890.94, change: 692.27, changePercent: 0.84 },
  { index: "BANK NIFTY", value: 53234.85, change: -156.30, changePercent: -0.29 },
];

export const MarketTicker = () => {
  const [marketData, setMarketData] = useState<MarketData[]>(fallbackMarketData);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const [marketNews] = useState([
    "🇮🇳 Nifty 50 maintains momentum as FII activity surges",
    "💰 Gold futures hit fresh highs amid global uncertainty",
    "📊 Banking stocks lead market gains on strong credit growth",
    "💱 Dollar Index stabilizes as Fed signals policy pause",
    "⚡ Indian markets outperform Asian peers on domestic strength",
    "🌏 EUR/USD trades sideways ahead of ECB meeting",
    "💹 Sensex inches closer to 86,000 milestone",
    "🔥 USD/JPY volatility increases on BOJ policy speculation",
    "📈 Silver futures surge on industrial demand outlook",
    "🎯 Bank Nifty shows resilience amid rate cycle expectations",
  ]);

  const fetchMarketData = async () => {
    try {
      const { data, error } = await supabase.functions.invoke<MarketDataResponse>("fetch-market-data", { body: {} });

      if (error) {
        console.warn("Unable to fetch live market data:", error.message);
        return;
      }

      if (data?.success && Array.isArray(data.data) && data.data.length > 0) {
        setMarketData(data.data);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.warn("Unable to fetch live market data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(() => fetchMarketData(), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative border-y border-border/30 overflow-hidden">
      <div className="absolute inset-0 bg-card/40 backdrop-blur-sm" />

      <div className="container mx-auto px-4 py-5 relative z-10">
        {/* Live Indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-red-500"
            />
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em] flex items-center gap-1.5">
              <Activity size={12} />
              {isLoading ? "Loading..." : "Live Market Data"}
            </span>
          </div>
          {lastUpdate && (
            <span className="text-[10px] text-muted-foreground/60 font-mono">
              {lastUpdate.toLocaleTimeString()}
            </span>
          )}
        </div>

        {/* Market Indices - Auto Scrolling */}
        <div className="relative mb-5 overflow-hidden">
          <div className="flex gap-3 animate-scroll hover:[animation-play-state:paused] cursor-pointer">
            {[...marketData, ...marketData, ...marketData, ...marketData].map((item, index) => (
              <motion.div
                key={`${item.index}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % marketData.length) * 0.08 }}
                className={`flex-shrink-0 rounded-2xl px-5 py-4 min-w-[200px] backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${item.change >= 0
                  ? "bg-emerald-500/5 border-emerald-500/15 hover:border-emerald-500/30"
                  : "bg-red-500/5 border-red-500/15 hover:border-red-500/30"
                  }`}
              >
                <div className="text-[10px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                  {item.index}
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-xl font-extrabold text-foreground tracking-tight font-[JetBrains_Mono]">
                    {item.value.toFixed(2)}
                  </span>
                  <div className={`flex items-center gap-1 text-xs font-bold ${item.change >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}>
                    {item.change >= 0 ? <TrendingUp size={24} /> : <TrendingDown size={34} />}
                    <div className="flex flex-col">
                      <span className="leading-tight">
                        {item.change >= 0 ? "+" : ""}{item.change.toFixed(2)}
                      </span>
                      <span className="text-[10px] leading-tight opacity-70">
                        ({item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* News Ticker */}
        <div className="relative overflow-hidden rounded-xl bg-muted/20 border border-border/20 py-2.5">
          <div className="flex gap-12 animate-scroll">
            {[...marketNews, ...marketNews, ...marketNews].map((news, index) => (
              <div key={index} className="flex items-center gap-3 text-xs text-muted-foreground font-medium whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-secondary/60" />
                <span>{news}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );
};
