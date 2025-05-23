// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import icon1 from '../assets/icon1.jpg';
// import '../style/header.css';

// const Header = () => {
//   const iconRef = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scale = Math.max(0.8, 1 - scrollTop / 500);
//       if (iconRef.current) {
//         iconRef.current.style.transform = `scale(${scale})`;
//       }

//       if (headerRef.current) {
//         headerRef.current.style.boxShadow = scrollTop > 50 ?
//           '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className='header' ref={headerRef}>
//       <div className='container'>
//         <div className='logo'>
//           <Link to='/' onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//             <img ref={iconRef} src={icon1} alt='Camera Icon' className='logo-icon' />
//             <span className='logo-text'>
//               <span className='highlight'>NR</span> Photography
//             </span>
//           </Link>
//         </div>

//         <button
//           className={`hamburger ${isMenuOpen ? 'active' : ''}`}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation menu"
//         >
//           <span className='hamburger-line'></span>
//           <span className='hamburger-line'></span>
//           <span className='hamburger-line'></span>
//         </button>

//         <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
//           <ul>
//             <li><Link to="/" onClick={closeMenu}>Home</Link></li>
//             <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
//             <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
//             <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
//             <li><Link to="/booking" onClick={closeMenu} className="booking-link">Book Session</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon1 from '../assets/icon1.jpg';
import '../style/header.css';

const Header = () => {
  const iconRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scale = Math.max(0.8, 1 - scrollTop / 500);
      if (iconRef.current) {
        iconRef.current.style.transform = `scale(${scale})`;
      }

      if (headerRef.current) {
        headerRef.current.style.boxShadow = scrollTop > 50 ? 
          '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleBookingClick = (e) => {
    e.preventDefault();
    closeMenu();
    
    if (location.pathname === '/') {
      // If already on home page, scroll to booking section
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home then scroll
      window.location.href = '/#booking-section';
    }
  };

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='logo'>
          <Link to='/' onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img ref={iconRef} src={icon1} alt='Camera Icon' className='logo-icon' />
            <span className='logo-text'>
              <span className='highlight'>NR</span> Photography
            </span>
          </Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li>
              <Link 
                to="/#booking-section" 
                onClick={handleBookingClick} 
                className={`booking-link ${location.hash === '#booking-section' ? 'active' : ''}`}
              >
                Book Session
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;