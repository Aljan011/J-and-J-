"use client";
import React, { useState } from "react";
import { Phone, Mail, ArrowUp } from "lucide-react"; // ✅ iPhone-like icons

const FloatingSidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle minimize/maximize
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Main Sidebar Container */}
      <div className={`hm-floating-sidebar ${isMinimized ? "hm-minimized" : ""}`}>
        {/* Phone Button */}
        <a
          href="tel:+1234567890"
          className="hm-sidebar-btn hm-phone-btn"
          title="Call us: +1 (234) 567-890"
        >
          <Phone size={22} />
        </a>

        {/* Email Button */}
        <a
          href="mailto:info@yourcompany.com"
          className="hm-sidebar-btn hm-email-btn"
          title="Email us: info@yourcompany.com"
        >
          <Mail size={22} />
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="hm-sidebar-btn hm-scroll-top-btn"
          title="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleMinimize}
        className="hm-sidebar-toggle-btn"
        title={isMinimized ? "Expand menu" : "Minimize menu"}
      >
        {isMinimized ? "▶" : "◀"}
      </button>
    </>
  );
};

export default FloatingSidebar;
