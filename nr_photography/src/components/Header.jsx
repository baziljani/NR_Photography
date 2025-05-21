import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../assets/icon1.jpg';
import '../style/header.css';

const Header = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scale = Math.max(0.8, 1 - scrollTop / 500);
      if (iconRef.current) {
        iconRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link to='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img ref={iconRef} src={icon1} alt='Camera Icon' className='logo-icon' />
            <span className='logo-text'>
            <span className='highlight'>NR</span> Photography</span>
          </Link>
        </div>
        <nav className='nav'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
