import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle overlay gradients that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col">
        {/* Top nav */}
        <div className="flex items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300 shadow-[0_0_40px_rgba(99,102,241,0.35)]" />
            <span className="font-semibold tracking-wide text-white/90">Team Void</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-6 text-sm text-white/70"
          >
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </motion.div>
        </div>

        {/* Hero copy */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              Trade the Future with
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-amber-300">
                Team Void
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-2xl text-white/70 text-lg"
            >
              Holographic-speed execution, institutional-grade security, and deep liquidity. All in a platform engineered for crypto-native pros.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-medium bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400 text-black shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
              >
                <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-medium bg-white/5 text-white/90 backdrop-blur border border-white/10 hover:bg-white/10 transition"
              >
                <Shield className="h-5 w-5" />
                Why Team Void
              </a>
            </motion.div>

            {/* Value bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
                <Zap className="h-5 w-5 text-amber-300" />
                <span className="text-sm text-white/80">Sub-10ms order routing</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
                <Shield className="h-5 w-5 text-cyan-300" />
                <span className="text-sm text-white/80">Cold storage custody</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3 backdrop-blur">
                <Rocket className="h-5 w-5 text-fuchsia-300" />
                <span className="text-sm text-white/80">Advanced pro tooling</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
