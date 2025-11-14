'use client';
import "../styles/homepage.css";
import "@fontsource/baloo-2";         
import "@fontsource/baloo-2/400.css";

import React from "react";

import HeroSection from "./components/HomePage/HeroSection.jsx";
import ClientSection from "./components/HomePage/ClientSection.jsx";  
import OurServices from "./components/HomePage/OurServices.jsx";
import PaperBags from "./components/HomePage/PaperBags.jsx";
import PackagingServices from "./components/HomePage/PackagingServices.jsx";
import PrintingServices from "./components/HomePage/PrintingServices.jsx";
import AboutUsSection from "./components/HomePage/AboutUsSection.jsx";
import ImageSection from "./components/HomePage/ImageSection.jsx";
import BlogSection from "./components/HomePage/BlogSection.jsx";
import ContactSection from "./components/HomePage/Contact.jsx";

const hmClientsData = [
    { name: 'CaRaRu', logo: '/api/placeholder/120/60' },
    { name: 'Biography', logo: '/api/placeholder/120/60' },
    { name: 'Merobhnu', logo: '/api/placeholder/120/60' },
    { name: 'Sunrise Apartments', logo: '/api/placeholder/120/60' },
    { name: 'YoTi School', logo: '/api/placeholder/120/60' },
    { name: 'Postbase', logo: '/api/placeholder/120/60' },
    { name: 'Dreams & Ideas', logo: '/api/placeholder/120/60' },
    { name: 'Probio', logo: '/api/placeholder/120/60' },
    { name: 'Yeti Nails & Spa', logo: '/api/placeholder/120/60' },
    { name: 'KUDH', logo: '/api/placeholder/120/60' },
    { name: 'Eco Farm', logo: '/api/placeholder/120/60' },
    { name: 'Green Leaf', logo: '/api/placeholder/120/60' },
  ];

  // Duplicate clients for seamless infinite scroll
  const hmClientsDuplicated = [...hmClientsData, ...hmClientsData];

export default function Homepage() {

  return (
    <main className="hm-homepage">

      <HeroSection />
      <ClientSection hmClientsDuplicated={hmClientsDuplicated} />
      <OurServices />
      <PaperBags />
      <PackagingServices />
      <PrintingServices />
      <AboutUsSection />
      <ImageSection />
      <BlogSection />
      <ContactSection />

    </main>
  );
}
