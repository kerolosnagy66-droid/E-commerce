import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import { FaLaptop, FaTv, FaMobileAlt, FaHeadset, FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa';
import missionImg from './1.jpg';

const features = [
  { icon: <FaLaptop />, title: 'Premium Laptops', desc: 'Powerful performance for your daily professional and creative needs.' },
  { icon: <FaTv />, title: 'Smart Entertainment', desc: 'Cinematic visuals and smart features for your home theater.' },
  { icon: <FaMobileAlt />, title: 'Latest Mobile Tech', desc: 'Stay connected with the newest smartphones and innovations.' },
  { icon: <FaHeadset />, title: 'Expert Support', desc: 'Dedicated help and technical assistance whenever you need it.' }
];

const stats = [
  { icon: <FaRocket />, count: '10k+', label: 'Products Delivered' },
  { icon: <FaUsers />, count: '5k+', label: 'Happy Customers' },
  { icon: <FaShieldAlt />, count: '100%', label: 'Secure Shopping' }
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Modern Technology</span>
            <h1>Premium Electronics for Your Digital Lifestyle</h1>
            <p>Explore our carefully selected range of high-performance laptops, TVs, and mobile devices.</p>
            <div className="hero-btns">
              <Link to="/shop" className="btn-primary">Shop Now</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Why Choose Us</span>
            <h2>Innovative Solutions for Everyone</h2>
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

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-image-box">
              <img src={missionImg} alt="Our Showroom" className="mission-img" />
              <div className="image-accent"></div>
            </div>
            <div className="mission-text-box">
              <span className="subtitle">Our Mission</span>
              <h2>Building the Future Together</h2>
              <p>
                We are committed to providing the best electronic solutions with a focus on quality, reliability, and excellent customer service. Our mission is to make high-end technology accessible to everyone, helping you stay ahead in a fast-paced digital world.
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

      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Upgrade?</h2>
            <p>Join our community of tech enthusiasts and experience the difference today.</p>
            <Link to="/shop" className="btn-primary">Start Shopping</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
