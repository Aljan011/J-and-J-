'use client';
import React, {useState} from 'react';
import '../styles/layout.css';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS manually
config.autoAddCss = false; // Prevent FontAwesome from adding the CSS automatically

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <html lang="en">
      <body>
        {/* TOP BAR */}
        <div className="layout-topbar">
          <div className="layout-topbar-left">
            <a href="mailto:info@jjprinters.com" className="layout-topbar-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@jjprinters.com</span>
            </a>
            <span className="layout-topbar-separator">|</span>
            <a href="tel:+1234567890" className="layout-topbar-item">
              📞 <span>+1 234 567 890</span>
            </a>
          </div>

          <div className="layout-topbar-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* NAV BAR */}
        <nav className="layout-navbar">
          <div className="layout-navbar-logo">J&J Printers</div>

           {/* Hamburger icon for mobile */}
          <button
            className="layout-navbar-hamburger"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>

          {/*nav links */}
          <div className={`layout-navbar-links ${menuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href ="/blog">Blog</a>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}