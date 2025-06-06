import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import hamburgerMenuLegacy from './hamburgerMenuLegacy';
import About from './pages/About';
import Tokenomics from './pages/Tokenomics';
import Airdrop from './pages/Airdrop';
import Liquidity from './pages/Liquidity';
import Staking from './pages/Staking';
import Links from './pages/Links';

function App() {
  useEffect(() => { hamburgerMenuLegacy(); }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {/* ===================
           NAVIGATION BAR
        ===================== */}
  <nav className="navbar">
    <Link to="/" className="navbar-link navbar-brand">
      <span className="text-purple">$</span><span className="text-teal">LVN</span>
    </Link>
    <button className="menu-icon" aria-label="Open menu" aria-expanded="false">
      <span className="menu-icon-bar"></span>
      <span className="menu-icon-bar"></span>
      <span className="menu-icon-bar"></span>
    </button>
    <ul className="navbar-links">
        <li><Link to="/" className="navbar-link"><span className="text-purple">$</span><span className="text-teal">LVN</span></Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/tokenomics" className="navbar-link">Tokenomics</Link></li>
        <li><Link to="/airdrop" className="navbar-link">Airdrop</Link></li>
        <li><Link to="/liquidity" className="navbar-link">Liquidity</Link></li>
        <li><Link to="/staking" className="navbar-link">Staking</Link></li>
        <li><Link to="/links" className="navbar-link">Links</Link></li>
    </ul>
  </nav>
  <div className="navbar-border"></div>
  <Routes>
    <Route path="/" element={
      <>
        {/* ===================
             MAIN CONTENT
        ===================== */}
        <main className="page-content">
          {/* ===== HEADER ===== */}
          <div className="header-wrapper">
            <h1 className="header-title">
              <span className="header-symbol text-purple">$</span>
              <span className="text-teal">LVN</span>
            </h1>
              <span className="header-tagline text-purple">Built for Long-Term Growth.</span>
          </div>
          {/* ===== HEARTBEAT ===== */}
          <div className="heartbeat-container">
            <svg className="heartbeat-svg" width="100%" viewBox="0 0 600 40">
              <path id="heartbeat-path" d="M0 20 L60 20 L80 10 L100 30 L120 20 L200 20 L220 15 L240 20 L300 20 L320 5 L340 35 L360 20 L440 20 L460 18 L480 20 L540 20 L560 10 L580 30 L600 20" fill="none"/>
            </svg>
          </div>
          {/* ===== ACTION BUTTONS ===== */}
          <div className="action-btn-group">
            <button className="button button-primary">Buy on DEX</button>
            <button className="button button-secondary">Connect Wallet</button>
          </div>
          <div className="bottom-divider"></div>
        </main>
      </>
    } />
    <Route path="/about" element={<About />} />
    <Route path="/tokenomics" element={<Tokenomics />} />
    <Route path="/airdrop" element={<Airdrop />} />
    <Route path="/liquidity" element={<Liquidity />} />
    <Route path="/staking" element={<Staking />} />
    <Route path="/links" element={<Links />} />
  </Routes>
  {/* ===================
       SCRIPTS
  ===================== */}
  {/* <script src="hamburgerMenu.js"></script> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
