import { CheckCircle, Users, Award, MapPin } from "lucide-react";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="badge">About Us</span>
            <h2 className="about-title">
              Your Trusted Interior Partner in Mianwali
            </h2>
            <p className="about-description">
              Pakistan Interior is a registered company based in Mianwali,
              serving the entire district with professional interior solutions.
              We specialize in transforming spaces with premium quality
              materials and expert craftsmanship that truly makes your place
              beautiful.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <CheckCircle size={24} className="feature-icon" />
                <div className="feature-content">
                  <h4 className="feature-title">Professional Team</h4>
                  <p className="feature-description">
                    Experienced craftsmen and designers dedicated to excellence
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle size={24} className="feature-icon" />
                <div className="feature-content">
                  <h4 className="feature-title">Government Projects</h4>
                  <p className="feature-description">
                    Trusted by government institutions for large-scale projects
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle size={24} className="feature-icon" />
                <div className="feature-content">
                  <h4 className="feature-title">Premium Quality</h4>
                  <p className="feature-description">
                    High-quality interior solutions at competitive prices
                  </p>
                </div>
              </div>
            </div>

            <div className="about-cards">
              <div className="about-card">
                <Users size={32} className="card-icon" />
                <div className="card-title">Expert Team</div>
                <div className="card-subtitle">Professional</div>
              </div>
              <div className="about-card">
                <Award size={32} className="card-icon" />
                <div className="card-title">Registered</div>
                <div className="card-subtitle">Company</div>
              </div>
              <div className="about-card">
                <MapPin size={32} className="card-icon" />
                <div className="card-title">Mianwali</div>
                <div className="card-subtitle">Based</div>
              </div>
            </div>
          </div>

          <div className="about-images">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
              alt="Our Office"
              className="main-image"
            />
            <div className="image-row">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=240&h=200&fit=crop"
                alt="Our Team"
                className="side-image"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=240&h=200&fit=crop"
                alt="Completed Project"
                className="side-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
