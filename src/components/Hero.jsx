import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState(""); 
  const[Makeup,setMakeup] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${query}`);
    }
  };

  const skinTypes = [
    { name: 'Skincare', color: '#e3f2fd', icon: '🧴' },
     { name: 'Makeup', color: '#fce4ec', icon: '💄' },
  ];

  return (
    <div className="Bag"> 
      <div className="lunchbox">

        <section className="item-1">
          <h1>Care for the skin<span className="highlight">You're in.</span></h1>
          <p className="subtitle">Feels like you need a right guidance ? You are in right place </p>

          <input
            type="text"
            placeholder="Rant about your skin .."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="search-input"
          />
        </section>

        <section className="item-2">
          <h2 className="section-title">Start your journey here.</h2>
          <div className="skincardsbox">
            {skinTypes.map((type) => (
              <div
                key={type.name}
                className="skin-card"
                onClick={() => navigate(`/routine/${type.name.toLowerCase()}`)}
                style={{ '--card-bg': type.color }}
              >
                <div className="skin-icon">{type.icon}</div>
                <h3>{type.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p><em>"Skincare is a journey, not a destination. Let's find your path."</em></p>
        </footer>

      </div>
    </div>
  );
};

export default Hero;