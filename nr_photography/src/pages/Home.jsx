import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../style/home.css';
import heroImage from '../assets/hero1.jpg';
import photographer1 from '../assets/photographer2.png';
import photographer2 from '../assets/photographer2.png';
import testimonial1 from '../assets/testmonial1.png';
import { FaCameraRetro, FaUserFriends, FaBuilding, FaRegCalendarCheck, FaPalette, FaFilm } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with our artistic wedding photography services.",
      icon: <FaCameraRetro />
    },
    {
      title: "Portrait Sessions",
      description: "Professional portraits that reveal your true personality.",
      icon: <FaUserFriends />
    },
    {
      title: "Commercial Photography",
      description: "High-quality images for your business and marketing needs.",
      icon: <FaBuilding />
    },
    {
      title: "Event Coverage",
      description: "Comprehensive coverage for all your important events.",
      icon: <FaRegCalendarCheck />
    },
    {
      title: "Creative Editing",
      description: "Expert retouching and creative editing to make your photos stand out.",
      icon: <FaPalette />
    },
    {
      title: "Video Production",
      description: "Professional video shoots and editing for events and promotions.",
      icon: <FaFilm />
    }
  ];

  const testimonials = [
    {
      quote: "NR Photography captured our wedding perfectly! The photos are stunning.",
      author: "Sarah & James",
      role: "Wedding Clients"
    },
    {
      quote: "The team is professional and creative. Our product photos increased sales by 30%!",
      author: "Michael Chen",
      role: "Business Owner"
    },
    {
      quote: "Best portrait experience I've ever had. The results were worth every penny.",
      author: "Emma Johnson",
      role: "Model"
    }
  ];

  return (
    <div className='home-page'>
      <Helmet>
        <title>NR Photography | Professional Photography Services</title>
        <meta name="description" content="Capture life's precious moments with NR Photography. Professional wedding, portrait, and commercial photography services." />
        <meta name="keywords" content="photography, wedding photos, portrait photography, commercial photography" />
      </Helmet>

      <section className='hero-section'>
  <div className='hero-image-wrapper'>
    <img src={heroImage} alt="Wedding photography" className='hero-image' />
    <div className='hero-overlay'></div>
  </div>
  
  <div className='hero-content'>
    <div className='logo-title'>
      <h1 className='brand-name'>NR PHOTOGRAPHY</h1>
    </div>
    <h2 className='hero-title'>
      Capturing Life's Beautiful<br />
      Moments
    </h2>
    <p className='hero-description'>
      Specializing in wedding, portrait, and event photography with a<br />
      timeless, elegant style that tells your unique story.
    </p>
    <div className='hero-buttons'>
      <Link to="/portfolio" className='btn btn-portfolio'>
        <span className='btn-content'>View Portfolio</span>
      </Link>
      <Link to="/contact" className='btn btn-contact'>
        <span className='btn-content'>Get In Touch</span>
      </Link>
    </div>
  </div>
</section>

      <section className='services-section'>
        <div className='container'>
          <h2>Our Services</h2>
          <div className='services-grid'>
            {services.map((service, index) => (
              <div className='service-card' key={index}>
                <div className='service-icon'>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="#booking-section" className='service-link'>Book Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className='about-section'>
        <div className='container'>
          <div className='about-content'>
            <div className='about-text'>
              <h2>About <br/> NR PHOTOGRAPHY</h2>
              <p>Welcome to NR PHOTOGRAPHY, where we transform moments into lasting memories. With a passion for creativity and an eye for detail, we specialize in capturing the essence of every occasion.</p>
              <p>Founded in 2025, NR PHOTOGRAPHY has grown to become a trusted name in the photography industry. Our team of professional photographers bring expertise and enthusiasm to every project.</p>
              <div className='photographers'>
                <div className='photographer'>
                  <img src={photographer1} alt="Lead Photographer" className='photographer-img'/>
                  <h4>Nikhil Reddy</h4>
                  <p>Lead Photographer</p>
                </div>
                <div className='photographer'>
                  <img src={photographer2} alt="Creative Director" className='photographer-img' />
                  <h4>Rachel Stone</h4>
                  <p>Creative Director</p>
                </div>
              </div>
            </div>
            <div className='about-image'>
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Professional Camera"/>
            </div>
          </div>
        </div>
      </section>

      <section className='portfolio-section'>
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
              <div className='work-item' key={index}>
                <img src={url} alt={`Featured Work ${index + 1}`} />
                <div className='work-overlay'>
                  <Link to="/portfolio">View Project</Link>
                </div>
              </div>
            ))}
          </div>
          <div className='portfolio-cta'>
            <Link to="/portfolio" className='cta-button'>View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='testimonials-section'>
        <div className='container'>
          <div className='testimonials-header'>
            <h2>Client Testimonials</h2>
            </div>
          <div className='testimonials-grid'>
            {testimonials.map((testimonial, index) => (
              <div className='testimonial-card' key={index}>
                <div className='testimonial-image'>
                  <img src={testimonial1} alt={testimonial.author} />
                </div>
                <div className='testimonial-content'>
                  <p className='quote'>"{testimonial.quote}"</p>
                  <div className='author'>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className='blog-section'>
        <div className='container'>
          <div className='blog-header'>
            <h2>Latest From Our Blog</h2>
          </div>
          <div className='blog-grid'>
            <div className='blog-card'>
              <div className='blog-image'>
                <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_640.jpg" alt="Photography Tips" />
              </div>
              <div className='blog-content'>
                <h3>10 Tips for Perfect Portrait Photography</h3>
                <p className='date'>May 15, 2023</p>
                <p>Learn professional techniques to capture stunning portraits in any lighting condition...</p>
                <Link to="/blog/portrait-tips" className='read-more'>Read More →</Link>
              </div>
            </div>
            <div className='blog-card'>
              <div className='blog-image'>
                <img src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_640.jpg" alt="Wedding Photography" />
              </div>
              <div className='blog-content'>
                <h3>How to Prepare for Your Wedding Photoshoot</h3>
                <p className='date'>April 28, 2023</p>
                <p>Essential preparation tips to ensure your wedding photos are everything you dreamed of...</p>
                <Link to="/blog/wedding-tips" className='read-more'>Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className='booking-form-section' id='booking-section'>
        <div className='container'>
          <div className='booking-header'>
            <h2>Ready to Create Memories?</h2>
            <p>Book your session today and let us capture your special moments</p>
          </div>
          <BookingForm/>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className='contact-cta'>
        <div className='container'>
          <h2>Have Questions?</h2>
          <p>We'd love to hear from you. Contact us for more information about our services.</p>
          <div className='contact-buttons'>
            <a href="tel:+919390228526" className='cta-button'>
              <span className='phone-icon'>📞</span> Call Us
            </a>
            <a href="mailto:info@nrphotography.com" className='cta-button secondary'>
              <span className='email-icon'>✉️</span> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;