import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black py-14">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_80%_100%,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300" />
            <span className="font-semibold text-white/90">Team Void</span>
          </div>
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Team Void Trading. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
