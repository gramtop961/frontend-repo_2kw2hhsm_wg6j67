import React, { useEffect, useMemo, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const initial = [
  { symbol: 'BTC', name: 'Bitcoin', price: 70250, change: 1.2 },
  { symbol: 'ETH', name: 'Ethereum', price: 3720, change: -0.4 },
  { symbol: 'SOL', name: 'Solana', price: 176.4, change: 2.3 },
  { symbol: 'AVAX', name: 'Avalanche', price: 46.1, change: 0.9 },
  { symbol: 'BNB', name: 'BNB', price: 612.3, change: 0.3 },
  { symbol: 'XRP', name: 'XRP', price: 0.74, change: -1.1 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.18, change: 3.2 },
  { symbol: 'ARB', name: 'Arbitrum', price: 1.24, change: 1.7 },
];

const TickerChip = ({ s, compact = false }) => {
  const pos = s.change >= 0;
  return (
    <div className="shrink-0 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur px-3 py-2 mr-3">
      <span className="font-semibold">{s.symbol}</span>
      {!compact && <span className="text-white/60 hidden sm:inline">{s.name}</span>}
      <span className="ml-2 tabular-nums">{s.price.toLocaleString()}</span>
      <span className={`ml-1 text-xs px-1.5 py-0.5 rounded ${pos ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'}`}>
        {pos ? '+' : ''}{s.change.toFixed(2)}%
      </span>
    </div>
  );
};

const LiveTicker = () => {
  const [data, setData] = useState(initial);
  const controls = useAnimation();

  // simple price jitter to feel live
  useEffect(() => {
    const id = setInterval(() => {
      setData((d) =>
        d.map((x) => {
          const delta = (Math.random() - 0.5) * (x.price * 0.002);
          const change = (Math.random() - 0.5) * 0.6;
          return { ...x, price: Math.max(0, +(x.price + delta).toFixed(2)), change: +(x.change + change).toFixed(2) };
        })
      );
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // scrolling animation
  useEffect(() => {
    controls.start({ x: ['0%', '-50%'], transition: { duration: 20, ease: 'linear', repeat: Infinity } });
  }, [controls]);

  const doubled = useMemo(() => [...data, ...data], [data]);

  return (
    <section aria-label="Live market ticker" className="relative py-6 border-y border-white/10 bg-black/60">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.06),transparent)]" />
      <div className="relative overflow-hidden">
        <motion.div className="flex" animate={controls}>
          {doubled.map((s, i) => (
            <TickerChip key={`${s.symbol}-${i}`} s={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTicker;
