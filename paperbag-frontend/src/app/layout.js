'use client';

import '../styles/layout.css';
import './globals.css';

import "@fontsource/baloo-2/400.css";
import "@fontsource/baloo-2";

import FloatingSidebar from './FloatingSidebar';


import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS manually
config.autoAddCss = false; // Prevent FontAwesome from adding the CSS automatically

import TopBar from './components/MenuBar/TopBar';
import FooterSection from './components/MenuBar/FooterSection';

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body>

        <TopBar />

        {/* MAIN CONTENT */}
        <main>{children}</main>

        <FooterSection />
        <FloatingSidebar />

      </body>
    </html>
  );
}