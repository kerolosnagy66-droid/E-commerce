import { Link } from 'react-router-dom';

const Placeholder = ({ title }) => (
  <div className="placeholder-page" style={{ 
    padding: '120px 0', 
    textAlign: 'center', 
    background: 'var(--bg-light)',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div className="container">
      <h1 style={{ 
        fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
        marginBottom: '20px',
        background: 'var(--primary-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '800'
      }}>{title}</h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: 'var(--text-muted)',
        marginBottom: '40px',
        maxWidth: '600px',
        margin: '0 auto 40px'
      }}>We're currently building something amazing here. Stay tuned for the latest tech and gadgets!</p>
      <Link to="/" className="submit-btn" style={{ maxWidth: '200px', margin: '0 auto' }}>
        Back to Home
      </Link>
    </div>
  </div>
);

export const Shop = () => <Placeholder title="The Shop" />;
export const Blog = () => <Placeholder title="Tech Blog" />;
