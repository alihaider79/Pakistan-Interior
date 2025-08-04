import { Phone, MapPin, Star, MessageCircle } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-brand">
            <h1 className="hero-title">
              Pakistan <span className="highlight">Interior</span>
            </h1>
            <p className="hero-subtitle">We Make Your Place Beautiful</p>
            <p className="hero-description">
              From 3D wallpapers to complete building construction - we bring
              your vision to life with premium quality materials and expert
              craftsmanship at competitive prices.
            </p>
          </div>

          <div className="hero-buttons">
            <a
              href="https://wa.me/923005339666"
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              WhatsApp Quote
            </a>
            <a href="tel:03005339666" className="btn btn-outline btn-large">
              <Phone size={20} />
              Call: 0300 533 9666
            </a>
          </div>

          <div className="hero-features">
            <div className="feature">
              <MapPin size={16} />
              <span>Mianwali District</span>
            </div>
            <div className="feature">
              <Star size={16} />
              <span>Registered Company</span>
            </div>
            <div className="feature">
              <div className="status-dot"></div>
              <span>Government Projects</span>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="image-grid">
            <div className="image-column">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
                alt="Modern Interior Design"
                className="hero-image"
              />
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=150&fit=crop"
                alt="PVC Ceiling"
                className="hero-image"
              />
            </div>
            <div className="image-column offset">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=150&fit=crop"
                alt="3D Wallpaper"
                className="hero-image"
              />
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop"
                alt="Wooden Flooring"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
