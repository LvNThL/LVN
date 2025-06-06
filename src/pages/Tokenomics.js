import React from 'react';
import { Link } from 'react-router-dom';

function Tokenomics() {
  return (
    <div className="page-content tokenomics-page">
      {/* MAIN CONTENT */}
      <main className="page-content">
        {/* ===== HEADER ===== */}
        <div className="header-wrapper">
          <h1 className="header-title">
            <span className="header-symbol text-purple">$</span>
            <span className="text-teal">LVN</span>
          </h1>
          <span className="header-tagline text-purple">Tokenomics</span>
        </div>
        {/* ===== PARAGRAPH ===== */}
        <div className="paragraph-container">
          <p>
            Information about the <span className="text-purple">$</span><span className="text-teal">LVN</span> Tokenomics will be available soon.
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

export default Tokenomics;
