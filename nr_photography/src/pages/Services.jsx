import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
// import servicesHero from '../assets/services_hero.jpg'
import '../style/services.css';



const servicesData = [
  {
    id: 1,
    title: 'Portrait Photography',
    shortDescription: 'Beautiful indivudal and group portraits that capture personality and emotion.',
    description: 'Our portrait photography sessions are designed to capture the essence of who you are. Wheather you need professional headshots, family potraits, or creative individual shots , we create images you\'ll cherish forever. Session include 1-2 hours of shooting time, multiple locations/backgrounds and professional editing.',
    price: 199,
    image: 'https://source.unsplash.com/random/400x300/?portrait',
    sampleImages: [
      'https://source.unsplash.com/random/300x200/?portrait,1',
      'https://source.unsplash.com/random/300x200/?portrait,2',
      'https://source.unsplash.com/random/300x200/?portrait,3'
    ]
  },
  {
    id: 2,
    title: 'Weeding Photography',
    shortDescription: 'your wedding day one of the most important days of your life, and we\'re honored to capture every special moment.Our wedding photography packages include full-day coverage, a second shooter, engagement session, and beautifully edited high-resolutions images. We specialize in both traditional and photojournalistic styles.',
    price: 1499,
    image: 'https://source.unsplash.com/random/400x300/?wedding',
    sampleImages: [
      'https://source.unsplash.com/random/400x300/?wedding,1',
      'https://source.unsplash.com/random/400x300/?wedding,2',
      'https://source.unsplash.com/random/400x300/?wedding,3'
    ]
  },
  {
    id: 3,
    title: 'Event Photography',
    shortDescription: 'Professional coverage for corporate events, parties and special occasions.',
    description: 'From corporate events to borthday parties, we provide professional event photography that captures the energy and emotions of your occasions. Our services include pre-event consultations, full coverage of the event and quick turnaround times for edited images. Perfect for business needing conference coverage or families celebrating milestones.',
    price: 399,
    image: 'https://source.unsplash.com/random/400x300/?event',
    sampleImages: [
      'https://source.unsplash.com/random/300x200/?event,1',
      'https://source.unsplash.com/random/300x200/?event,2',
      'https://source.unsplash.com/random/300x200/?event,3'
      
    ]
  },
  {
    id: 4,
    title: 'Product photography',
    shortDescription: 'High-quality images that make your products stand out and sell.',
    description: 'Great product photography is essential for e-commerce and marketing. We create clean, professional images that showcase your products in the best light. Services include studio setup with professional lighting, multiple angles per product and editing to ensure color accurancy. Perfect for online stores, catalogs and adverting.',
    price: 99,
    image: 'https://source.unsplash.com/random/400x300/?product',
    sampleImages: [
      'https://source.unsplash.com/random/300x200/?product,1',
      'https://source.unsplash.com/random/300x200/?product,2',
      'https://source.unsplash.com/random/300x200/?product,3'
    ]
  },
  {
    id: 5,
    title: 'Comercial Photography',
    shortDescription: 'Professional images for businesses, adversting and branding.',
    description: 'Our commercial photography services help business create powerful visual content for marketing and branding. We work with you to understand your brand identify and create images that communicate your message effectivly. Service include location scouting, professional models (if needed), and post-production editing to meet your brand guidelines.',
    price: 499,
    image: 'https://source.unsplash.com/random/400x300/?commercial',
    sampleImages: [
      'https://source.unsplash.com/random/300x200/?commercial,1',
      'https://source.unsplash.com/random/300x200/?commercial,2',
      'https://source.unsplash.com/random/300x200/?commercial,3'
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className='services-page'>
      <section className='services-hero'>
        <div className='container'>
          {/* <img src={servicesHero} alt="Services Hero" className='services-hero-image' /> */}
          <h1>Our Services</h1>
          <p>Professional Photography Services tailored to your needs </p>
        </div>
      </section>
      <section className='services-list'>
        <div className='container'>
          <div className='services-grid'>
            {servicesData.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => setSelectedService(service)} />
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
};

export default Services;