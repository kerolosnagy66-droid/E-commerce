import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
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
    
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="contact-tag">Contact Us</span>
          <h1>Let's Start a Conversation</h1>
          <p>Have questions about our products or need support? Our team is here to help.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h2>Get in Touch</h2>
                <p>Reach out through any of these channels. We typically respond within 24 hours.</p>

                <div className="info-list">
                  {[
                    { icon: <FaPhoneAlt />, label: 'Call Us', val: '+20 1050946687' },
                    { icon: <FaEnvelope />, label: 'Email Us', val: 'support@ecommerce-tech.com' },
                    { icon: <FaMapMarkerAlt />, label: 'Visit Us', val: 'Ismailia, Egypt' },
                    { icon: <FaClock />, label: 'Business Hours', val: 'Sat - Fri: 10am - 10pm' }
                  ].map((item, idx) => (
                    <div key={idx} className="info-item">
                      <div className="info-icon">{item.icon}</div>
                      <div className="info-details">
                        <label>{item.label}</label>
                        <span>{item.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we will get back to you shortly.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-row">
                  <div className={`form-group ${activeField === 'name' ? 'active' : ''}`}>
                    <label htmlFor="name">Full Name</label>
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

                  <div className={`form-group ${activeField === 'email' ? 'active' : ''}`}>
                    <label htmlFor="email">Email Address</label>
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

                <div className={`form-group ${activeField === 'subject' ? 'active' : ''}`}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    placeholder="Subject of your message"
                  />
                </div>

                <div className={`form-group ${activeField === 'message' ? 'active' : ''}`}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  ></textarea>
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
