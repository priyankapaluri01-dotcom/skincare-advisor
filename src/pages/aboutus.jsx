import React, { useState } from 'react';
import './aboutus.css';

const AboutUs = () => {
  const [email, setEmail] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Welcome to the Glow Squad!`);
    setEmail('');
  };

  const techStack = [
    {
      title: "Development Environment & Tools",
      content: "I choosed VITE as the bulid tool mainly because of its HMR Feature as it captures the changes super fast.Javascript (E26+) features and Git for professional based version control (proabaly for tracking changes)"
    },
    {
      title: "Core React Architecture (Hooks & Routing)",
      content: "As a base i used the popular Javascript libary React and in this project i just understand how react this whole works , understood the JSX , and also implemted Basic Hooks (usestate for statemangement,useeffect for sideeffect and understood it lifecycle methods,By React Router i just handled this navigation between views , Event listensers to handle interactions easily  "
    },
    {
      title: "Backend & Database (Firebase)",
      content: "Used for Auth and learned how this BASS works , used firestore as real time NO-SQL database and handled to store user info "
    },
    {
      title: "UI & Styling (Modern CSS)",
      content: "With help of AI , I just understand how a flexbox/grid is used , and also learned differnt tranisitons , and also mobile repsonsive design works "
    },
    {
      title: "Production Deployment (Vercel)",
      content: "Through this I have learned how to handle deployment log erros and also how we can directly deploy from github"
    }
  ];

  return (
    <div className="about-page content-fade-in">
      <header className="about-header">
        <h2 className="sub-heading">Our Story</h2>
        <h1>Hi, We're <span className="italic-text">Team Glow</span></h1>
        <p className="intro-text">
          We are tech enthusiasts and skincare lovers on a mission to simplify your beauty routine.
        </p>
      </header>

      <section className="vision-section">
        <div className="vision-card">
          <h2>The Story Behind <span className="glow-highlight">Glow</span></h2>
          <p className="vision-p">
            This project started because I realized that skincare shouldn't be a 
            guessing game. I wanted to build a bridge between <strong>complex dermatological 
            data</strong> and <strong>simple user choices</strong>.
          </p>
        </div>
      </section>
      <section className="logic-note-section">
        <div className="logic-box">
          <div className="logic-badge">TECHNICAL STACK</div>
          <h3>Built From Scratch</h3>
          <p className="logic-p">Here is the complete tech stack I used to bring Glow to life:</p>
          
          <div className="accordion-container">
            {techStack.map((tech, index) => (
              <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <span>{tech.title}</span>
                  <span className={`arrow-icon ${activeIndex === index ? 'open' : ''}`}>▼</span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{tech.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="subscribe-section">
        <div className="subscribe-box">
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
            <button type="submit" className="glow-btn">Subscribe</button>
          </form>
          <p className="footer-sub-text">Join our community of 500+ glow-getters!</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;