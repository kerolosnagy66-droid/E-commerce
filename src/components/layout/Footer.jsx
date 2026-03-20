import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-item brand">
            <h3>E-commerce</h3>
            <p>Your quality shop for electronics and more. We provide high-end products with the best service.</p>
            <div className="social-links">
              <Link to="https://www.facebook.com"><FaFacebook /></Link>
              <Link to="https://www.twitter.com"><FaXTwitter /></Link>
              <Link to="https://www.instagram.com"><FaInstagram /></Link>
              <Link to="https://www.linkedin.com"><FaLinkedin /></Link>
            </div>
          </div>
          
          <div className="footer-item">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-item">
            <h4>Support</h4>
            <ul>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} E-commerce. <span>Developed by Eng-Kerolos Nagy</span></p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer