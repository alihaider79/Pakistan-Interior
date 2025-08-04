import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="badge">Contact Us</span>
          <h2 className="contact-title">Ready to Transform Your Space?</h2>
          <p className="contact-description">
            Get in touch with our professional team for a free consultation and
            quote. We're here to make your place beautiful.
          </p>
        </div>

        <div className="contact-content-simple">
          <div className="contact-info-main">
            <div className="contact-info-card">
              <h3 className="info-title">Contact Information</h3>
              <div className="contact-info">
                <div className="info-item">
                  <Phone size={24} className="info-icon" />
                  <div className="info-content">
                    <div className="info-label">Phone</div>
                    <div className="info-value">0300 533 9666</div>
                    <div className="info-note">
                      Call for immediate assistance
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <MessageCircle
                    size={24}
                    className="info-icon whatsapp-icon"
                  />
                  <div className="info-content">
                    <div className="info-label">WhatsApp</div>
                    <div className="info-value">0300 533 9666</div>
                    <div className="info-note">Quick response via WhatsApp</div>
                  </div>
                </div>
                <div className="info-item">
                  <Mail size={24} className="info-icon" />
                  <div className="info-content">
                    <div className="info-label">Email</div>
                    <div className="info-value">info@pakistaninterior.com</div>
                    <div className="info-note">Send us your requirements</div>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin size={24} className="info-icon" />
                  <div className="info-content">
                    <div className="info-label">Office Location</div>
                    <div className="info-value">Mianwali, Punjab</div>
                    <div className="info-note">Display Center Available</div>
                  </div>
                </div>
                <div className="info-item">
                  <Clock size={24} className="info-icon" />
                  <div className="info-content">
                    <div className="info-label">Working Hours</div>
                    <div className="info-value">Mon - Sat: 9AM - 7PM</div>
                    <div className="info-note">Sunday: By appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info-sidebar">
            <div className="service-areas-card">
              <h3 className="areas-title">Service Areas</h3>
              <p className="areas-description">
                We provide our services throughout Mianwali District and
                surrounding areas.
              </p>
              <ul className="areas-list">
                <li>• Mianwali City</li>
                <li>• Entire Mianwali District</li>
                <li>• Government Buildings</li>
                <li>• Commercial Projects</li>
                <li>• Residential Properties</li>
              </ul>
            </div>

            <div className="why-choose-card">
              <h3 className="why-title">Why Choose Us?</h3>
              <div className="why-features">
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <span>Free Consultation</span>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <span>Professional Team</span>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <span>Quality Materials</span>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <span>Competitive Prices</span>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <span>Government Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
