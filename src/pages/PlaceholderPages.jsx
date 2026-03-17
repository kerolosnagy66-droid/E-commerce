import React from 'react';

const Placeholder = ({ title }) => (
  <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{title}</h1>
    <p style={{ fontSize: '1.2rem', color: '#666' }}>This page is currently under development. Stay tuned!</p>
  </div>
);

export const Shop = () => <Placeholder title="Shop" />;
export const Blog = () => <Placeholder title="Our Blog" />;
export const About = () => <Placeholder title="About Us" />;
export const Contact = () => <Placeholder title="Contact Us" />;
