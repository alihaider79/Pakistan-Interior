import { Wallpaper, Home, Layers, Hammer, Building, Eye } from "lucide-react";

const serviceCategories = [
  {
    title: "Wall Solutions",
    icon: Wallpaper,
    color: "#D4AF37",
    services: [
      "3D Flex Wallpaper",
      "PVC Panels",
      "Paint Work",
      "UV Marble Sheets",
      "Sticker Marble Sheets",
    ],
  },
  {
    title: "Ceiling Solutions",
    icon: Layers,
    color: "#B8860B",
    services: ["PVC Ceiling", "False Ceiling POP", "Gypsum Ceiling 2x2"],
  },
  {
    title: "Flooring Solutions",
    icon: Home,
    color: "#DAA520",
    services: ["Vinyl Flooring", "Wooden Flooring"],
  },
  {
    title: "Window Treatments",
    icon: Eye,
    color: "#CD853F",
    services: ["Window Blinds", "Window Curtains"],
  },
  {
    title: "Construction & Woodwork",
    icon: Hammer,
    color: "#D2691E",
    services: ["Wood Work", "Building Construction"],
  },
  {
    title: "Government Projects",
    icon: Building,
    color: "#B8860B",
    services: [
      "Registered Company",
      "Professional Team",
      "Government Contracts",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="badge">Our Services</span>
          <h2 className="services-title">Complete Interior Solutions</h2>
          <p className="services-description">
            From residential to commercial projects, we offer comprehensive
            interior services with premium quality and competitive prices that
            make your place beautiful.
          </p>
        </div>

        <div className="services-grid">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div
                    className="service-icon"
                    style={{ backgroundColor: category.color }}
                  >
                    <IconComponent size={24} color="white" />
                  </div>
                  <h3 className="service-title">{category.title}</h3>
                  <p className="service-subtitle">
                    Professional installation and premium materials
                  </p>
                </div>
                <div className="service-content">
                  <ul className="service-list">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="service-item">
                        <div className="service-bullet"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-stats">
          <div className="stats-card">
            <h3 className="stats-title">Why Choose Pakistan Interior?</h3>
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
