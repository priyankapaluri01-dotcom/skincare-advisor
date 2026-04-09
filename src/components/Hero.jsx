import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-wrapper">
      <div className="content-container">
        
       
        <section className="hero-main">
          <h1 className="hero-title">
            Care for the skin <span className="highlight">You're In.</span>
          </h1>
          <p className="hero-subtitle">
            Personalized guidance for your unique glow.
          </p>
        </section>
        <div className="wide-quiz-box">
          <div className="quiz-box-content">
            <p className="quiz-label"></p>
            <h1 className="quiz-main-title">Know Your Skin Type</h1>
            <p className="quiz-sub-text">
              The first step to building a routine is understanding your skin
              Please follow the steps under and answer questions for better results 
            </p>
            <button 
              className="quiz-start-btn" 
              onClick={() => navigate('/skin')}
            >
              Get in ? 
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;