import React, { useState } from 'react';
import { sendForm } from '@emailjs/browser';
import { 
  FaCamera, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCalendarAlt,
  FaComment,
  FaGlassCheers
} from 'react-icons/fa';
import { 
  MdPortrait, 
  MdEvent, 
  MdShoppingBag, 
  MdBusiness 
} from 'react-icons/md';
// import { FaGlassCheers } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import '../style/booking.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '', 
    date: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const services = {
        'Portrait Photography': 'Portrait',
        'Wedding Photography': 'Wedding',
        'Event Photography': 'Event',
        'Product Photography': 'Product',
        'Commercial Photography': 'Commercial'
      };

      const whatsappMessage = `*New Booking Request*%0A%0A
      *Name:* ${formData.name}%0A
      *Email:* ${formData.email}%0A
      *Phone:* ${formData.phone}%0A
      *Service:* ${services[formData.service]}%0A
      *Date:* ${formData.date}%0A
      *Message:* ${formData.message}`;

      window.open(`https://wa.me/919390228526?text=${whatsappMessage}`, '_blank');

      await sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
      e.target.reset();

    } catch (error) {
      console.error('Error:', error);
      alert('Booking submitted! We will contact you shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking-section" className='booking-form-section'>
      <div className='booking-form'>
        <h2 className="booking-title">
          <span className="icon-frame"><FaCamera /></span>
          Book Your Photoshoot
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type="text"
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder=' '
              required
            />
            <label htmlFor="name">
              <span className="input-icon"><FaUser /></span>
              Full Name
            </label>
          </div>

          <div className='form-group'>
            <input
              type="email"
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder=' '
              required
            />
            <label htmlFor="email">
              <span className="input-icon"><FaEnvelope /></span>
              Email Address
            </label>
          </div>

          <div className='form-group'>
            <input
              type="tel"
              id='phone'
              name='phone'
              pattern='[0-9]{10}'
              value={formData.phone}
              onChange={handleChange}
              placeholder=' '
              required
            />
            <label htmlFor="phone">
              <span className="input-icon"><FaPhone /></span>
              Phone Number
            </label>
          </div>

          <div className='form-group select-group'>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>Select Service</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Event Photography">Event Photography</option>
              <option value="Product Photography">Product Photography</option>
              <option value="Commercial Photography">Commercial Photography</option>
            </select>
            <div className="select-arrow"><IoIosArrowDown /></div>
          </div>

          <div className='form-group'>
            <input
              type="date"
              id='date'
              name='date'
              min={new Date().toISOString().split('T')[0]}
              value={formData.date}
              onChange={handleChange}
              placeholder=' '
              required
            />
            <label htmlFor="date">
              <span className="input-icon"><FaCalendarAlt /></span>
              Preferred Date
            </label>
          </div>

          <div className='form-group'>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder=' '
            />
            <label htmlFor="message">
              <span className="input-icon"><FaComment /></span>
              Additional Details
            </label>
          </div>

          <button 
            type="submit" 
            className='submit-btn' 
            disabled={loading}
          >
            <span className="button-content">
              {loading ? 'Sending...' : (
                <>
                  <FaCalendarAlt /> Book Now
                </>
              )}
              <span className="button-hover-effect"></span>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;