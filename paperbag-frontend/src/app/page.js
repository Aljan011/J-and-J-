import "../styles/homepage.css";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, FaTwitter, FaSpotify } from "react-icons/fa";

export default function Homepage() {
  return (
    <>
    <section
      className="hero-section"
      style={{ backgroundImage: "url('/homebg.png')" }} 
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Your Trusted Partner in Printing
        </h1>
        <p className="hero-subtitle">
          High-quality paper bags, packaging boxes, and printing services — crafted to perfection.
        </p>
      </div>
    </section>

    {/* Clients Slider */}
      <section className="clients-section">
        <h2 
  className="text-center text-2xl font-bold mb-6" 
  style={{ color: "#209344" }}
>
  Brands We Have Worked With 
</h2>
        <div className="clients-slider">
          <div className="client-logo"><FaApple /></div>
          <div className="client-logo"><FaGoogle /></div>
          <div className="client-logo"><FaAmazon /></div>
          <div className="client-logo"><FaMicrosoft /></div>
          <div className="client-logo"><FaFacebook /></div>
          <div className="client-logo"><FaTwitter /></div>
          <div className="client-logo"><FaSpotify /></div>
        </div>
      </section>
      </>
  );
}
