import React, { useState } from 'react';
import './form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your enquiry! We will get back to you within 24 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="form-section">
      <div className="form-container">
        <div className="form-header">
          <h3>Send Us a Message</h3>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name *"
                className={`form-input ${errors.firstName ? 'error' : ''}`}
                required
              />
              {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name *"
                className={`form-input ${errors.lastName ? 'error' : ''}`}
                required
              />
              {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address *"
              className={`form-input ${errors.email ? 'error' : ''}`}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number *"
              className={`form-input ${errors.phone ? 'error' : ''}`}
              required
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject *"
              className={`form-input ${errors.subject ? 'error' : ''}`}
              required
            />
            {errors.subject && <p className="error-message">{errors.subject}</p>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              placeholder="Tell us about your project or inquiry... *"
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              required
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        <div className="form-footer">
          <p>
            By submitting this form, you agree to our{' '}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;