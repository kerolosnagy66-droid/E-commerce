import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import { FaLaptop, FaTv, FaMobileAlt, FaHeadset, FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa';

export default function AboutUs() {
  const features = [
    { icon: <FaLaptop />, title: 'Premium Laptops', desc: 'Cutting-edge performance for professionals and gamers alike.' },
    { icon: <FaTv />, title: 'Smart Entertainment', desc: 'Experience cinema-quality visuals in the comfort of your home.' },
    { icon: <FaMobileAlt />, title: 'Latest Mobile Tech', desc: 'Stay ahead with the newest smartphones and mobile innovations.' },
    { icon: <FaHeadset />, title: 'Expert Support', desc: 'Dedicated technical assistance to keep your devices running smoothly.' }
  ];

  const stats = [
    { icon: <FaRocket />, count: '10k+', label: 'Products Delivered' },
    { icon: <FaUsers />, count: '5k+', label: 'Happy Customers' },
    { icon: <FaShieldAlt />, count: '100%', label: 'Secure Shopping' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Welcome to the Future</span>
            <h1>Elevating Your Digital Lifestyle</h1>
            <p>Discover the future of technology with our curated selection of high-end electronics.</p>
            <div className="hero-btns">
              <Link to="/shop" className="btn-primary">Explore Products</Link>
              <Link to="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
        <div className="hero-waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What We Offer</span>
            <h2>Innovative Solutions for Every Need</h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon-box">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-image-box">
              <img src="/assets/images/about-mission.png" alt="Our Showroom" className="mission-img" />
              <div className="image-accent"></div>
            </div>
            <div className="mission-text-box">
              <span className="subtitle">Our Mission</span>
              <h2>Pioneering the Digital Future</h2>
              <p>
                We strive to empower your digital lifestyle by providing top-tier electronics with a focus on reliability, customer service, and technical excellence. Our goal is to bridge the gap between you and the future of technology, making high-end solutions accessible to everyone.
              </p>
              <div className="stats-grid">
                {stats.map((s, i) => (
                  <div key={i} className="stat-card">
                    <span className="stat-icon">{s.icon}</span>
                    <div className="stat-info">
                      <span className="stat-count">{s.count}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Upgrade?</h2>
            <p>Join thousands of satisfied customers and experience the difference today.</p>
            <Link to="/shop" className="btn-primary">Start Shopping</Link>
          </div>
        </div>
      </section>
    </div>
  );
}