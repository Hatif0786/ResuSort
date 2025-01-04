import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-title">ResuSort</h3>
          <p className="footer-description">Empowering job seekers with AI-powered resume analysis.</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com/resusort" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="https://twitter.com/resusort" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            <a href="https://linkedin.com/company/resusort" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img 
            src="/logo-icon.svg" 
            alt="ResuSort"
            style={{ 
              height: 24,
              width: 'auto'
            }} 
          />
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} ResuSort. All rights reserved.
          </Typography>
        </Box>
      </div>
    </footer>
  );
}

