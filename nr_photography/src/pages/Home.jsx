import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../style/home.css';
import heroImage from '../assets/hero1.jpg';
import photographer1 from '../assets/photographer2.png';
import photographer2 from '../assets/photographer2.png';
import testimonial1 from '../assets/testmonial1.png';
import { FaCameraRetro, FaUserFriends, FaBuilding, FaRegCalendarCheck, FaPalette, FaFilm } from 'react-icons/fa';
import certificateImg from '../assets/certificate.png';


function useAutoScrollCarousel(carouselRef, cardSelector, gap = 16, interval = 3500) {
  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;
    let scrollAmount = 0;
    let cardWidth = 0;
    let intervalId;
    let isHovered = false;

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };
    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    const scrollNext = () => {
      if (!track || isHovered) return;
      const cards = track.querySelectorAll(cardSelector);
      if (!cards.length) return;
      cardWidth = cards[0].offsetWidth + gap;
      scrollAmount += cardWidth;
      if (scrollAmount >= track.scrollWidth - track.offsetWidth) {
        scrollAmount = 0;
      }
      track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
    intervalId = setInterval(scrollNext, interval);
    return () => {
      clearInterval(intervalId);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [carouselRef, cardSelector, gap, interval]);
}

const blogPosts = [
  {
    image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_640.jpg",
    title: "10 Tips for Perfect Portrait Photography",
    date: "May 15, 2023",
    desc: "Learn professional techniques to capture stunning portraits in any lighting condition, from natural light to studio setups. Discover posing secrets and editing tricks for flawless results.",
    link: "/blog/portrait-tips"
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_640.jpg",
    title: "How to Prepare for Your Wedding Photoshoot",
    date: "April 28, 2023",
    desc: "Essential preparation tips to ensure your wedding photos are everything you dreamed of. From timelines to must-have shots, get expert advice for your big day.",
    link: "/blog/wedding-tips"
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_640.jpg",
    title: "Creative Editing: Transform Your Photos",
    date: "March 10, 2023",
    desc: "Explore the latest editing trends and tools. Learn how to add drama, color, and style to your images with advanced Photoshop and Lightroom techniques.",
    link: "/blog/creative-editing"
  },
  {
    image: "https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_640.jpg",
    title: "Event Photography: Capturing the Moment",
    date: "February 18, 2023",
    desc: "Discover how to capture the energy and emotion of live events. Tips for working in challenging lighting and fast-paced environments.",
    link: "/blog/event-photography"
  }
];

function BlogCarousel() {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const length = blogPosts.length;

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, length]);


  const getVisiblePosts = () => {
    let posts = [];
    for (let i = 0; i < visibleCount; i++) {
      posts.push(blogPosts[(current + i) % length]);
    }
    return posts;
  };

  return (
    <div className='blog-carousel'>
      <div className='blog-carousel-multi'>
        {getVisiblePosts().map((post, idx) => (
          <div className='blog-card' key={idx}>
            <div className='blog-image'>
              <img src={post.image} alt={post.title} />
            </div>
            <div className='blog-content'>
              <h3>{post.title}</h3>
              <p className='date'>{post.date}</p>
              <p>{post.desc}</p>
              <Link to={post.link} className='read-more'>Read More →</Link>
            </div>
          </div>
        ))}
      </div>
      <div className='blog-carousel-dots'>
        {blogPosts.map((_, idx) => (
          <span key={idx} className={`dot${idx === current ? ' active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
}

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
  },
  {
    quote: "NR Photography made our event unforgettable. Highly recommended!",
    author: "Priya Singh",
    role: "Event Client"
  },
  {
    quote: "Creative, reliable, and always on time. The best photography team!",
    author: "David Lee",
    role: "Corporate Client"
  },
  {
    quote: "Our family portraits are beautiful. Thank you for your patience and talent!",
    author: "The Martins",
    role: "Family Session"
  }
];

function TestimonialsCarousel() {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const length = testimonials.length;

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000); // Change interval to 2 seconds
    return () => clearTimeout(timeoutRef.current);
  }, [current, length]);

  // Looping logic for visible cards
  const getVisibleTestimonials = () => {
    let cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(testimonials[(current + i) % length]);
    }
    return cards;
  };

  return (
    <div className='testimonials-carousel'>
      <div className='carousel-track testimonials-carousel-multi'>
        {getVisibleTestimonials().map((testimonial, idx) => (
          <div className='testimonial-card' key={idx}>
            <div className='testimonial-image'>
              <img src={testimonial1} alt={testimonial.author} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto'}} />
            </div>
            <div className='testimonial-content'>
              <p className='quote' style={{wordBreak: 'break-word', maxHeight: '110px', overflow: 'auto'}}>
                "{testimonial.quote}"
              </p>
              <div className='author'>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel-dots'>
        {testimonials.map((_, idx) => (
          <span key={idx} className={`dot${idx === current ? ' active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
}

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

  const blogCarouselRef = useRef(null);
  const servicesCarouselRef = useRef(null);
  const testimonialsCarouselRef = useRef(null);

  useAutoScrollCarousel(blogCarouselRef, '.blog-card');
  useAutoScrollCarousel(servicesCarouselRef, '.service-tile');
  useAutoScrollCarousel(testimonialsCarouselRef, '.testimonial-card');

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
    <h2 className='services-title-alt'>Our Services</h2>
    <div className='services-list-alt' ref={servicesCarouselRef}>
      {services.map((service, index) => (
        <div className='service-tile' key={index}>
          <div className='service-icon-large service-icon-circle'>{service.icon}</div>
          <div className='service-info'>
            <h3 className='service-title-alt'>{service.title}</h3>
            <p className='service-desc-alt'>{service.description}</p>
            <div className='service-actions'>
              <Link to={`/services#${service.title.replace(/\s+/g, '-').toLowerCase()}`} className='service-action-link yellow-btn'>View Details</Link>
              <Link to='/#booking-section' className='service-action-link yellow-btn'>Book Now</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className='about-section'>
        <div className='container'>
          <div className='about-content-alt'>
            <div className='about-image-alt'>
              <img src={photographer1} alt="Lead Photographer" className='about-main-img'/>
              <div className='about-img-overlay'></div>
            </div>
            <div className='about-text-alt'>
              <h2 className='about-title-alt'>Why Choose <span>NR PHOTOGRAPHY</span>?</h2>
              <ul className='about-features'>
                <li><strong>10+ Years Experience:</strong> Trusted by hundreds of clients for weddings, portraits, and commercial shoots.</li>
                <li><strong>Award-Winning Team:</strong> Our photographers are recognized nationally for creativity and professionalism.</li>
                <li><strong>Cutting-Edge Equipment:</strong> We use the latest cameras and editing tools for stunning results.</li>
                <li><strong>Personalized Service:</strong> Every session is tailored to your unique story and style.</li>
                <li><strong>Fast Turnaround:</strong> Receive your edited photos quickly, without compromising on quality.</li>
              </ul>
              <div className='about-cta'>
                <Link to='/portfolio' className='about-btn'>See Our Work</Link>
                <Link to='/contact' className='about-btn secondary'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='portfolio-section'>
        <div className='container'>
          <h2>Portfolio Highlights</h2>
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

      <section className='testimonials-section'>
        <div className='container'>
          <div className='testimonials-header'>
            <h2>Client Testimonials</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className='certificates-section'>
        <div className='container'>
          <h2>Our Achievements & Top Photographers</h2>
          <div className='certificates-content'>
            <div className='certificates-list'>
              <img src={certificateImg} alt="Certificate 1" className='certificate-img' />
              <img src={certificateImg} alt="Certificate 2" className='certificate-img' />
              <img src={certificateImg} alt="Certificate 3" className='certificate-img' />
            </div>
            <div className='top-photographers'>
              <h3>Meet Our Award-Winning Team</h3>
              <div className='photographers-list'>
                <div className='photographer-card'>
                  <img src={photographer1} alt="Nikhil Reddy" className='photographer-img' />
                  <h4>Nikhil Reddy</h4>
                  <p>Lead Photographer</p>
                  <span className='badge'>Top 10 in India</span>
                </div>
                <div className='photographer-card'>
                  <img src={photographer2} alt="Rachel Stone" className='photographer-img' />
                  <h4>Rachel Stone</h4>
                  <p>Creative Director</p>
                  <span className='badge'>Award Winner</span>
                </div>
              </div>
              <p className='nr-place'>NR Photography is recognized as one of the best studios in the region, trusted by hundreds of happy clients and featured in top photography magazines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-section'>
        <div className='container'>
          <div className='blog-header'>
            <h2>Latest From Our Blog</h2>
          </div>
          <BlogCarousel />
        </div>
      </section>

      <section className='booking-form-section' id='booking-section'>
        <div className='booking-form-center-wrapper'>
          <div className='booking-header'>
            <h2>Ready to Create Memories?</h2>
            <p>Book your session today and let us capture your special moments</p>
          </div>
          <BookingForm/>
        </div>
      </section>

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