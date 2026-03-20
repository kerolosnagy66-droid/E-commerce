import React from 'react';
import './LegalPages.css';

const LegalPage = ({ title, content }) => (
  <div className="legal-page">
    <div className="legal-hero">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
    <div className="container">
      <div className="legal-content">
        {content}
      </div>
    </div>
  </div>
);

export const ShippingInfo = () => (
  <LegalPage 
    title="Shipping Information" 
    content={
      <>
        <section>
          <h2>Fast & Reliable Delivery</h2>
          <p>We offer worldwide shipping to ensure you get your favorite gadgets no matter where you are. Our shipping partners include DHL, FedEx, and UPS to guarantee safety and speed.</p>
        </section>
        <section>
          <h2>Delivery Times</h2>
          <ul>
            <li><strong>Domestic (Egypt):</strong> 2-4 business days</li>
            <li><strong>International:</strong> 7-14 business days</li>
          </ul>
        </section>
        <section>
          <h2>Tracking Your Order</h2>
          <p>Once your order is shipped, you will receive a tracking number via email to monitor your package's journey in real-time.</p>
        </section>
      </>
    } 
  />
);

export const Returns = () => (
  <LegalPage 
    title="Returns & Refunds" 
    content={
      <>
        <section>
          <h2>Hassle-Free Returns</h2>
          <p>If you're not completely satisfied with your purchase, you can return it within 14 days of delivery. The item must be in its original packaging and unused condition.</p>
        </section>
        <section>
          <h2>Refund Process</h2>
          <p>Once we receive and inspect your return, we will process your refund within 5-7 business days to your original payment method.</p>
        </section>
      </>
    } 
  />
);

export const PrivacyPolicy = () => (
  <LegalPage 
    title="Privacy Policy" 
    content={
      <>
        <section>
          <h2>Your Privacy Matters</h2>
          <p>We are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use our website.</p>
        </section>
        <section>
          <h2>Information Collection</h2>
          <p>We only collect information necessary to process your orders and improve your shopping experience, such as your name, email, and shipping address.</p>
        </section>
      </>
    } 
  />
);

export const Terms = () => (
  <LegalPage 
    title="Terms & Conditions" 
    content={
      <>
        <section>
          <h2>Introduction</h2>
          <p>By using our website, you agree to these terms and conditions. Please read them carefully before making a purchase.</p>
        </section>
        <section>
          <h2>User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password. We reserve the right to refuse service or terminate accounts at our discretion.</p>
        </section>
      </>
    } 
  />
);
