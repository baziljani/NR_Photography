import React from 'react'
import '../style/service-modal.css';

const ServiceModal = ({ service, onClose, onBookNow }) => {
  if (!service) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <button className='close-btn' onClick={onClose}>&times;</button>
        <h2>{service.title}</h2>
        <p className='service-description'>{service.description}</p>
        <div className='price-section'>
          <h3>Starting from</h3>
          <p className='price'>₹{service.price}</p>
        </div>
        <div className='sample-images'>
          <h3>Sample Images</h3>
          <div className='image-grid'>
            {service.sampleImages.map((img, index) => (
              <img key={index} src={img} alt={`Sample ${index + 1}`} className='sample-img-small' />
            ))}
          </div>
        </div>
        <div className='cta-section'>
          <button 
            className='book-now-btn attractive-btn'
            onClick={() => {
              onClose();
              onBookNow();
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;