import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div className="page-content links-page">
      {/* ===================
           MAIN CONTENT
      ===================== */}
      <main className="page-content">
        {/* ===== HEADER ===== */}
        <div className="header-wrapper">
          <h1 className="header-title">
              <span className="header-symbol text-purple">$</span><span className="text-teal">LVN</span>
          </h1>
          <span className="header-tagline text-purple">Official Links</span>
        </div>
        {/* ===== LINKS CONTAINER ===== */}
        <div className="links-container">
          <ul>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/token/0x48911Dd6FA7D7E26d0aD3aC8965F3407626265B4" target="_blank" rel="noopener noreferrer">
                Token Smart Contract
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0xf81a135175bff228317fDe500CB6649e5891AC04" target="_blank" rel="noopener noreferrer">
                Halving Smart Contract
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0xd2e6C6ff96e148914AAae789B40dd3257C79076D" target="_blank" rel="noopener noreferrer">
                Airdrop Smart Contract
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0x71513B50a2F4B63b52BF39932345E2C781F8C0CA" target="_blank" rel="noopener noreferrer">
                Developer Wallet
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0xc6Db04F80360EaFc0A6c4021991b5876Cf5DDa6c" target="_blank" rel="noopener noreferrer">
                Treasury Wallet
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0x4202eb5f37cff68e5abc30d685dbfaa71a4258fa" target="_blank" rel="noopener noreferrer">
                Halving Wallet (Locked)
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0xCB652ddA2082434EFf479b8303cc9123deb9c793" target="_blank" rel="noopener noreferrer">
                Halving Wallet (Unlocked)
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0x4501d5BFb01a02ff1A6F7241692ebd5CD6cd1811" target="_blank" rel="noopener noreferrer">
                Airdrop Wallet (Locked)
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0x5906A668FeB10a5D91212316e134603Ea9D51688" target="_blank" rel="noopener noreferrer">
                Airdrop Wallet (Unlocked)
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0x44bA7054045DF3f8277817c5c0A30520Aa855CC8" target="_blank" rel="noopener noreferrer">
                Liquidity Pool Wallet
              </a>
            </li>
            <li>
              <a className="hyper-link" href="https://polygonscan.com/address/0x2a48f3babb673fedbaf54950e5b161bcbb8ea32c" target="_blank" rel="noopener noreferrer">
                Staking Pool Wallet
              </a>
            </li>
          </ul>
        </div>
        {/* ===== BACK LINK & DIVIDER ===== */}
        <div className="back-link-container">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
        <div className="bottom-divider"></div>
      </main>
    </div>
  );
}

export default Links;
