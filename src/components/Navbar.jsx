import { useState } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import logo from "/src/assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <img src={logo} alt="Pakistan Interior" className="nav-logo-img" />
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a href="#hero" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a
            href="#services"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#video"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Videos
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <a
            href="https://wa.me/923005339666"
            className="nav-btn whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a href="tel:03005339666" className="nav-btn call-btn">
            <Phone size={16} />
            0300 533 9666
          </a>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
