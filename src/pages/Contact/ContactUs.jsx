import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock, FaHeart } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    // Simulate form submission
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <span className="contact-tag">Contact Us</span>
          <h1>Let's Start a Conversation</h1>
          <p>Have questions about our products or need technical support? We're here to help.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h2>Get in Touch</h2>
                <p>Reach out to us through any of these channels. We typically respond within 24 hours.</p>

                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon"><FaPhoneAlt /></div>
                    <div className="info-details">
                      <label>Call Us</label>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><FaEnvelope /></div>
                    <div className="info-details">
                      <label>Email Us</label>
                      <span>support@ecommerce-tech.com</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><FaMapMarkerAlt /></div>
                    <div className="info-details">
                      <label>Visit Us</label>
                      <span>123 Tech Avenue, Silicon Valley, CA</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"><FaClock /></div>
                    <div className="info-details">
                      <label>Business Hours</label>
                      <span>Mon - Fri: 9am - 6pm</span>
                    </div>
                  </div>
                </div>

                <div className="sidebar-accent">
                   <FaHeart className="heart-icon" />
                   <span>We love hearing from you!</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and our team will get back to you shortly.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-row">
                  <div className={`form-group ${activeField === 'name' ? 'active' : ''}`}>
                    <label htmlFor="name">Full Name</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className={`form-group ${activeField === 'email' ? 'active' : ''}`}>
                    <label htmlFor="email">Email Address</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={`form-group ${activeField === 'subject' ? 'active' : ''}`}>
                  <label htmlFor="subject">Subject</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setActiveField('subject')}
                      onBlur={() => setActiveField(null)}
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                <div className={`form-group ${activeField === 'message' ? 'active' : ''}`}>
                  <label htmlFor="message">Message</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      placeholder="Your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="premium-submit">
                  <span>Send Message</span>
                  <FaPaperPlane className="plane-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
