import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', issueType: '', message: ''
  });
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We will get back to you soon.");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(subscribeEmail) navigate('/login');
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <h2 className="contact-subtitle">Tell us anything... We are all ears!</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name *" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="form-group full-width">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number *" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group full-width">
            <select name="issueType" value={formData.issueType} onChange={handleChange} required>
              <option value="" disabled>Select Issue Type</option>
              <option value="product">Website related Query</option>
              <option value="skin-advice">Recommadation Query </option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group full-width">
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Write your message here..." 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="consent-section">
            <p className="marketing-text">You can also contact us for exciting offers regarding trusted <b>Glow</b> brands.</p>
            <label className="checkbox-aligner">
              <input type="checkbox" required />
              <span>
                I consent to receiving marketing communications (news, offers, updates, etc.) and online advertising tailored to my interests.
              </span>
            </label>
          </div>

          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>

        <div className="caution-notice">
          <h3>Caution Notice</h3>
          <p><strong>Please Be Aware:</strong> Cyber crime, particularly fraudulent communications impersonating a brand, is on the rise.</p>
          <p>Glow does not request payment for products outside our official platform.</p>
        </div>
      </div>

      <section className="subscribe-section">
        <div className="subscribe-content">
          <h2>Join our <span className="squad-text">Glow Squad</span></h2>
          <p>For exclusive tips, expert advice, and personalized recommendations.</p>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter Your Email Id" 
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;