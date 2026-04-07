import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate(); //programmatic routing 
  const [query, setQuery] = useState(""); 

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "")  // in general .trim is used for data cleaning methos 
    {
      navigate(`/search?q=${query}`); // this is how programmatic routing works , routing to a page after certain program logic is done
    }
  };
  //just in case , if i want to add things later and wanted to use these as reusable , so stores these as array 
  const skinTypes = [
    { 
      name: 'Skincare Quiz', 
      color: '#e3f2fd', 
      icon: '🧴', 
      desc: 'Find your perfect routine',
      path: 'skin' 
    },
    { 
      name: 'Makeup Quiz', 
      color: '#fce4ec', 
      icon: '💄', 
      desc: 'Discover your shade',
      path: 'makeup' 
    },
  ];

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

          <div className="search-box-wrapper">
            <input
              type="text"
              placeholder="Tell us about your skin concerns..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}  // without using search button jusst giving results 
              className="glow-search"
            />
          </div>
        </section>

        <section className="quiz-section">
          <h2 className="section-title">Start your journey here.</h2>
          <div className="cards-grid">
            {skinTypes.map((type) => (
              <div
                key={type.name}
                className="premium-card"
                onClick={() => navigate(`/routine/${type.path}`)} //Dynamic routing
                style={{ '--accent-bg': type.color }}  //css variable injection 
              >
                <div className="card-content">
                  <div className="card-icon-wrapper" style={{ backgroundColor: type.color }}>
                    {type.icon}
                  </div>
                  <h3>{type.name}</h3>
                  <p>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="hero-footer">
          <p><em>"Skincare is a journey, not a destination. Let's find your path."</em></p>
        </footer>

      </div>
    </div>
  );
};

export default Hero;