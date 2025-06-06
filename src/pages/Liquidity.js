import React from 'react';
import { Link } from 'react-router-dom';

function Liquidity() {
  return (
    <div className="page-content liquidity-page">
      {/* MAIN CONTENT */}
      <main className="page-content">
        {/* ===== HEADER ===== */}
        <div className="header-wrapper">
          <h1 className="header-title">
            <span className="header-symbol text-purple">$</span>
            <span className="text-teal">LVN</span>
          </h1>
          <span className="header-tagline text-purple">Liquidity Pool</span>
        </div>
        {/* ===== PARAGRAPH ===== */}
        <div className="paragraph-container">
          <p>
            Information about the <span className="text-purple">$</span><span className="text-teal">LVN</span> Liquidity Pool will be available soon.
          </p>
        </div>
        {/* ===== BACK LINK ===== */}
        <div className="back-link-container">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
        <div className="bottom-divider"></div>
      </main>
    </div>
  );
}

export default Liquidity;
