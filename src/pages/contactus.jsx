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
          <h2>Tell us anything... We are all ears!</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name <span>*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Phone Number <span>*</span></label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group full-width">
            <select name="issueType" value={formData.issueType} onChange={handleChange} required>
              <option value="">Select Issue Type</option>
              <option value="product">Product Inquiry</option>
              <option value="skin-advice">Skin Advice</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea name="message" rows="6" value={formData.message} onChange={handleChange}></textarea>
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

          <button type="submit" className="submit-btn">SEND</button>
        </form>

        <div className="caution-notice">
          <h3>Caution Notice</h3>
          <p><strong>Please Be Aware:</strong> Cyber crime, particularly fraudulent communications through phone, SMS, WhatsApp, emails, etc. impersonating a brand is on the rise.</p>
          <p>Glow does not request for payment for purchase of our products outside our platform.</p>
        </div>
      </div>

      <section className="subscribe-section">
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
      </section>
    </div>
  );
};

export default ContactUs;