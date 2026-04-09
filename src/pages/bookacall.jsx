import React, { useState } from 'react';
import './bookacall.css';

const BookCall = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    topic: '',
    timeSlot: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation Request:", formData);
    alert(`Request received! We will call you soon.`);
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        
        {/* Left Side: Content */}
        <section className="content-side">
          <h1 className="main-title">Leading chain of skin and makeup advisors in India</h1>
          <p className="description">
            We are a chain of leading services across India. If you want to 
            have a call or just want to know about skin, please fill the details, 
            our team member will contact you for more details.
          </p>

          <div className="usp-grid">
            <div className="usp-item">
              <span className="icon">👩‍⚕️</span>
              <p>Experienced Team of Advisors</p>
            </div>
            <div className="usp-item">
              <span className="icon">🔬</span>
              <p>Advanced Skin Analysis</p>
            </div>
            <div className="usp-item">
              <span className="icon">💰</span>
              <p>Transparent Pricing</p>
            </div>
            <div className="usp-item">
              <span className="icon">✨</span>
              <p>Trusted by 7 Lacs+ Clients</p>
            </div>
          </div>
        </section>

       
        <aside className="form-side">
          <div className="form-card">
            <h2>Book a Call</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="fullName" 
                placeholder="Full Name" 
                value={formData.fullName}
                onChange={handleChange} 
                required 
              />
              
              {/* Cleaned Phone Input */}
              <input 
                type="tel" 
                name="mobile" 
                placeholder="Phone Number" 
                value={formData.mobile}
                onChange={handleChange} 
                required 
                pattern="[0-9]{10}"
              />

              <select name="topic" value={formData.topic} onChange={handleChange} required>
                <option value="" disabled>What should we discuss?</option>
                <option value="Skin Routine">Skin Routine Advice</option>
                <option value="Makeup Consultation">Makeup Consultation</option>
                <option value="Product Recommendation">Product Recommendation</option>
                <option value="Other">Other Concerns</option>
              </select>

              <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
                <option value="" disabled>Preferred Time Slot</option>
                <option value="Morning (10AM - 1PM)">Morning (10AM - 1PM)</option>
                <option value="Afternoon (1PM - 5PM)">Afternoon (1PM - 5PM)</option>
                <option value="Evening (5PM - 8PM)">Evening (5PM - 8PM)</option>
              </select>

              <button type="submit" className="submit-btn">Request Call Back</button>
            </form>
            <div className="guarantee-bar">
              <span>📞 5 Minutes Call Back. Guaranteed!</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BookCall;