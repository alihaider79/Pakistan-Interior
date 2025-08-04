import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import logo from "/src/assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="nav-brand">
                <img
                  src={logo}
                  alt="Pakistan Interior"
                  className="nav-logo-img"
                />
              </div>
              <div className="brand-info">
                <h3 className="brand-name">Pakistan Interior</h3>
                <span className="badge">Registered Company</span>
              </div>
            </div>
            <p className="brand-description">
              Transform your space with professional interior solutions. From 3D
              wallpapers to complete construction - we deliver premium quality
              work at competitive prices across Mianwali District.
            </p>
            <div className="social-links">
              <div className="social-link">
                <Facebook size={20} />
              </div>
              <div className="social-link">
                <Instagram size={20} />
              </div>
              <div className="social-link">
                <Twitter size={20} />
              </div>
            </div>
          </div>

          <div className="footer-services">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-list">
              <li className="footer-link">3D Flex Wallpaper</li>
              <li className="footer-link">PVC Panels & Ceiling</li>
              <li className="footer-link">False Ceiling</li>
              <li className="footer-link">Vinyl & Wooden Flooring</li>
              <li className="footer-link">Window Treatments</li>
              <li className="footer-link">Paint Work</li>
              <li className="footer-link">Building Construction</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-list">
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span>0300 533 9666</span>
              </div>
              <div className="contact-item">
                <MessageCircle
                  size={20}
                  className="contact-icon whatsapp-icon"
                />
                <span>WhatsApp: 0300 533 9666</span>
              </div>
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span>info@pakistaninterior.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <div>
                  <div>Mianwali, Punjab</div>
                  <div className="contact-note">Display Center Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Pakistan Interior. All rights reserved. Registered Company in
            Mianwali District.
          </p>
          <div className="footer-links">
            <span className="footer-link">Privacy Policy</span>
            <span className="footer-link">Terms of Service</span>
            <span className="footer-link">Government Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
