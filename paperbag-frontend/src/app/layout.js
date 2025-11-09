'use client';
import React, {useState, useEffect} from 'react';
import '../styles/layout.css';
import './globals.css';
import "@fontsource/baloo-2/400.css"; 
import "@fontsource/baloo-2";
import FloatingSidebar from './FloatingSidebar';
import { FaFacebook, FaInstagram, FaTiktok, FaLocationArrow } from 'react-icons/fa';

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
  <span>jandjsprinting@gmail.com</span>
</a>
          <span className="layout-topbar-separator">|</span>
          <a href="+977 9843223219" className="layout-topbar-item">
  <Phone size={20} className="text-white" />
  <span>+977 9843223219</span>
</a>
        </div>

         <div className="layout-topbar-right">
      <a href="https://www.facebook.com/paperbagnepalfactory/" className="social-icon fb" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/jandj_paper_bag_nepal/" className="social-icon tw" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.tiktok.com/@jandjs_packaging" className="social-icon ln" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>

      <a href="https://maps.app.goo.gl/r1Rq6ZHzzLMwKRQF8" className="catalogue-btn">
         <FaLocationArrow/>
        <span className='catalogue-btn-name'>Find Us</span>
      </a>
    </div>
      </div>

      {/* NAV BAR */}
       <nav className={`layout-navbar ${scrolled ? "scrolled" : ""}`}>
  <div className="layout-navbar-logo">
    <a href="/">
      <img
        src="/logo.jpg"
        alt="J&J Printers Logo"
        className="logo-icon cursor-pointer"
      />
    </a>
  </div>
  

        <button
          className="layout-navbar-hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`layout-navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="/paper-bags">Paper Bag</a>
          <a href="/packaging-services">Packaging</a>
          <a href="/printing-supplies">Printing supplies</a>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
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
            J and J’s Packaging is a leading packaging company in Nepal, 
            specializing in paper bags, corrugated boxes, custom packaging, and printing supplies.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="hm-footer-col">
          <h4 className="hm-footer-title">Quick Links</h4>
          <ul className="hm-footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="#">Paper Bag</a></li>
            <li><a href="#">Corogated Box</a></li>
            <li><a href="/packaging-services">Printing Supplies</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="hm-footer-col">
          <h2 className="hm-footer-title">Contact Us</h2>
          <p>Email: jandjsprinting@gmail.com</p>
          <p>Phone: +977 9843223219</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="hm-footer-bottom">
        <p>© {new Date().getFullYear()} JandJ Packaging. All rights reserved.</p>
      </div>
    </footer>

<FloatingSidebar/>

      </body>
    </html>
  );
}