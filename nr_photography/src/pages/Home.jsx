import React from 'react';
import {Helmet} from 'react-helmet'
import BookingForm from '../components/BookingForm';
import '../style/home.css'
import heroImage from '../assets/hero.jpg';

const Home = () => {
  return (
    <div className='home-page'>
    <Helmet>
        <title>NR Photography | Professional Photography Services</title>
        <meta name="description" content="Capture life's precious moments with NR Photography. Professional wedding, portrait, and commercial photography services." />
        <meta name="keywords" content="photography, wedding photos, portrait photography, commercial photography" />
    </Helmet>
<section className='hero-section'>
  <div className='hero-content'>
    <div className='camera-lens-effect'>
      <h1>NR PHOTOGRAPHY</h1>
      <div className='aperture-blades'></div>
    </div>
    <p>Capturing Life's Precious Moments</p>
    <button className='cta-button'>
      <span className='shutter-icon'></span>
      View Portfolio
    </button>
  </div>
  <div className='hero-image'>
    <div className='film-strip-overlay'></div>
    <img src={heroImage} alt="Professional camera equipment and workspace" />
  </div>
</section>
      <section className='about-section'>
        <div className='container'>
          <h2>About NR PHOTOGRAPHY</h2>
          <div className='about-content'>
            <div className='about-text'>
              <p>Welcome to NR PHOTOGRAPHY, where we transform moments into lasting memories.
                With a passion for  creativity and an eye for detail, we specialize in Capturing
                the essence of every occasion.
              </p>
              <p>
                Founded in 2025, NR PHOTOGRAPHY has geown to become a trusted name in the photography industry. Our team of professional photographrs bring expertise and enthusiasm to every project, ensuring stunning results that exceed expecttions.

              </p>
              <p>
                Whether it's a wedding, corporate event, portrait session or commercial Project,
                We approach each asssinnment with the same level of dedication and artistic vision
              </p>
            </div>
            <div className='about-image'>
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Camera_Image"/>
            </div>
          </div>
        </div>
      </section>
    <section className='booking-section'>
      <div className='container'>
        <h2>Featured Work</h2>
        <div className='work-grid'>
          {[
            'https://cdn.pixabay.com/photo/2020/11/20/16/26/labrador-5762115_640.jpg',
            'https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_640.jpg',
            'https://cdn.pixabay.com/photo/2020/06/07/13/33/fireworks-5270439_640.jpg',
            'https://cdn.pixabay.com/photo/2020/04/01/12/46/city-4991094_640.jpg',
            'https://cdn.pixabay.com/photo/2020/05/30/03/15/girl-5237508_640.jpg',
            'https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg'
          ].map((url, index) => (
            <div key={index} className='work-item'>
              <img src={url} alt={`Featured Work ${index + 1}`} />
            </div>
          ))}
        </div>
        </div>
    </section>
    
      <section className='booking-form-section'>
        <div className='container'>
          <BookingForm/>
            </div>
      </section>
    </div>
  )
}

export default Home;