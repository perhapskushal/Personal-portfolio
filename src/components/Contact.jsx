import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>📧 Email:</strong>
              <a href="mailto:perhapskushal@gmail.com">perhapskushal@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>📱 Phone:</strong>
              <a href="tel:+9779865462380">+977 9865462380</a>
            </div>
            <div className="contact-item">
              <strong>📍 Location:</strong>
              <span>Kathmandu City, Bagmati Province, Nepal</span>
            </div>
            <div className="contact-item">
              <strong>💼 LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/kushalsth/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/kushalsth
              </a>
            </div>
            <div className="contact-item">
              <strong>💻 GitHub:</strong>
              <a href="https://github.com/kushalsth" target="_blank" rel="noopener noreferrer">
                github.com/kushalsth
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send me a message</h3>
            {submitted ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem',
                background: 'rgba(46, 204, 113, 0.2)',
                borderRadius: '10px',
                border: '1px solid rgba(46, 204, 113, 0.3)'
              }}>
                <h4 style={{ color: '#2ecc71', marginBottom: '1rem' }}>Thank you!</h4>
                <p>Your message has been sent successfully. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;