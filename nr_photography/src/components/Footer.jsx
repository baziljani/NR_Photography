import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-content'>
        <div className='footer-section'>
          <h3>NR PHOTOGRAPHY</h3>
          <p>Capturing your special moments with creativity and passion.</p>
        </div>
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Contact Info</h3>
          <p>Email: contact@nrphotography.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className='footer-section social-links'>
              <h3>Follow Us</h3>
              <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className='instagram'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='facebook'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href="https://youtube.com" target='_blank' rel='noopener noreferrer' className='youtube'>
                <i className='fab fa-youtube'></i>
              </a>
        </div>

      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} NR PHOTOGRAPHY</p>
      </div>
    </footer>
  );
};

export default Footer;
