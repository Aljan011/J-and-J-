'use client';
import React, {useState, useEffect} from 'react';
import '../styles/layout.css';
import './globals.css';
import FloatingSidebar from './FloatingSidebar';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaYoutube } from 'react-icons/fa';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS manually
config.autoAddCss = false; // Prevent FontAwesome from adding the CSS automatically

import { Phone } from "lucide-react";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); // when user scrolls past ~40px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <html lang="en">
      <body>
         {/* TOP BAR */}
      <div className="layout-topbar">
        <div className="layout-topbar-left">
          <a href="mailto:info@jjprinters.com" className="layout-topbar-item">
  <span style={{ fontSize: "25px" }}>✉</span>
  <span>info@jjprinters.com</span>
</a>
          <span className="layout-topbar-separator">|</span>
          <a href="tel:+1234567890" className="layout-topbar-item">
  <Phone size={20} className="text-white" />
  <span>+1 234 567 890</span>
</a>
        </div>

         <div className="layout-topbar-right">
      <a href="https://facebook.com" className="social-icon fb" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" className="social-icon tw" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" className="social-icon ln" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://pinterest.com" className="social-icon pt" target="_blank" rel="noopener noreferrer">
        <FaPinterest />
      </a>
      <a href="https://youtube.com" className="social-icon yt" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>

      <a href="/catalogue" className="catalogue-btn">
        <span className="catalogue-icon">🔥</span>
        CATALOGUE
      </a>
    </div>
      </div>

      {/* NAV BAR */}
       <nav className={`layout-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="layout-navbar-logo">
          <div className="logo-icon">J&J</div>
          J&J Printers
        </div>

        <button
          className="layout-navbar-hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`layout-navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="/products">PRODUCTS</a>
          <a href="/market">MARKET</a>
          <a href="/company">COMPANY</a>
          <a href="/news">NEWS & STORIES</a>
          <a href="/contact">CONTACT US</a>
        </div>
      </nav>
    

        {/* MAIN CONTENT */}
        <main>{children}</main>

        <footer className="hm-footer">
      <div className="hm-footer-container">
        {/* Column 1: Logo & About */}
        <div className="hm-footer-col">
          <h3 className="hm-footer-logo">Company Logo</h3>
          <p className="hm-footer-text">
            Your short company description goes here. We deliver quality and
            excellence in all our products.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="hm-footer-col">
          <h4 className="hm-footer-title">Quick Links</h4>
          <ul className="hm-footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="hm-footer-col">
          <h4 className="hm-footer-title">Contact Us</h4>
          <p>Email: info@company.com</p>
          <p>Phone: +977 1234567890</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="hm-footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>

<FloatingSidebar/>

      </body>
    </html>
  );
}