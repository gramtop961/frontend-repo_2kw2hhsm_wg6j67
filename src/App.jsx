import React from 'react';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import LiveTicker from './components/LiveTicker.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <Hero />
      <LiveTicker />
      <FeatureGrid />
      <Footer />
    </div>
  );
}

export default App;
