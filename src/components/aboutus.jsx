import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './aboutus.css';

const AboutUs = () => {
  const [email, setEmail] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); 
const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      navigate('/login'); 
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Know About our Ingredients</h1>
        <p className="intro-text">The world of skincare is always evolving...</p>
      </div>

      <div className="ingredients-grid">
        <div className="column good">
          <div className="column-header green-bg">Good Ingredients</div>
          <ul className="ingredient-list">
            <li>Hemp seed Oil <span>&gt;</span></li>
            <li>Witch Hazel Extract <span>&gt;</span></li>
            <li>Bisabolol <span>&gt;</span></li>
            <li>Vitamin E <span>&gt;</span></li>
            <li>Glycerin <span>&gt;</span></li>
          </ul>
        </div>


        <div className="column bad">
          <div className="column-header pink-bg">Baddies</div>
          <ul className="ingredient-list">
            <li>Fragrance <span>&gt;</span></li>
            <li>Soap <span>&gt;</span></li>
            <li>Ethyl Alcohol <span>&gt;</span></li>
            <li>Salicylic Acid<span>&gt;</span></li>
            <li>Synthetic colours<span>&gt;</span></li>

          </ul>
        </div>
      </div>

      <section className="who-we-are">
  <h2>Why Choose <span className="glow-text">Glow</span>?</h2>
  <p>
    We are a team of tech enthusiasts and skincare lovers dedicated to simplifying your beauty routine. 
    At Glow, we don’t just focus on skincare; we understand that makeup is an extension of your skin’s health. 
    We help you to analyze thousands of ingredients and cross-references them with clinical 
    dermatological data to provide personalized recommendations. Whether it’s finding the right moisturizer 
    or a foundation that won't clog your pores, we guide you to products that actually work for your unique 
    skin type. Give us a try, and let’s make your skin glow together!
  </p>
</section>
      <section className="subscribe-section">
        <h2>Join our <span className="squad-text">Glow Squad</span></h2>
        <p>For exclusive tips, expert advice, and personalized recommendations.</p>
        
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder="Enter Your Email Id" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
        
        <p className="sub-text">Subscribe to know more about us !</p>
      </section>
    </div>
  );
};

export default AboutUs;