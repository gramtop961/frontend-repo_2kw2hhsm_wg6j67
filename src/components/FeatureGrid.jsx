import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Shield, Zap, Globe, Wallet, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-amber-300" />,
    title: 'Ultra-fast Matching',
    desc: 'Low-latency order book with smart routing to maximize fills and minimize slippage.',
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-300" />,
    title: 'Institutional Security',
    desc: 'Cold storage custody, multi-sig controls, and continuous risk monitoring.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-fuchsia-300" />,
    title: 'Pro Trading Suite',
    desc: 'Advanced charting, algos, conditional orders, and custom strategies.',
  },
  {
    icon: <Globe className="h-6 w-6 text-emerald-300" />,
    title: 'Global Liquidity',
    desc: 'Deep books across spot, perpetuals, and options with cross-collateral.',
  },
  {
    icon: <Wallet className="h-6 w-6 text-blue-300" />,
    title: 'Non-Custodial On/Off Ramp',
    desc: 'Fast deposits and withdrawals with chain-aware fee optimization.',
  },
  {
    icon: <Rocket className="h-6 w-6 text-rose-300" />,
    title: 'Launchpad Access',
    desc: 'Curated token sales and early listings for verified projects.',
  },
];

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateX: -8 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_200px_at_var(--x,50%)_0%,rgba(168,85,247,0.15),transparent)]" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 border border-white/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const FeatureGrid = () => {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-black/95">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_20%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-xs tracking-widest uppercase text-white/60">Built for Pros</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">A platform engineered for alpha</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            From matching engine to custody, everything is optimized for speed, resilience, and control.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
