import React, { useState } from "react";
import "./skincaretips.css";

const tipsData = [
  {
    id: 1,
    category: "Morning",
    title: "The 2-Finger Rule",
    description: "Apply two full fingers of sunscreen to your face and neck for maximum protection.",
    icon: "☀️",
  },
  {
    id: 2,
    category: "Night",
    title: "Double Cleansing",
    description: "Use an oil-based cleanser followed by a water-based one to remove all makeup and dirt.",
    icon: "🌙",
  },
  {
    id: 3,
    category: "General",
    title: "Stay Hydrated",
    description: "Drinking water is the cheapest skincare product. Aim for 2-3 liters a day for that natural glow.",
    icon: "💧",
  },
  {
    id: 4,
    category: "Morning",
    title: "Vitamin C Boost",
    description: "Apply Vitamin C serum in the morning to fight pollution and brighten your skin tone.",
    icon: "🍊",
  },
  {
    id: 5,
    category: "Night",
    title: "Silk Pillowcase",
    description: "Sleep on silk to reduce friction, preventing fine lines and frizzy hair overnight.",
    icon: "🛌",
  },
  {
    id: 6,
    category: "General",
    title: "Hands Off!",
    description: "Avoid touching your face throughout the day to prevent bacteria from causing breakouts.",
    icon: "🚫",
  },
  {
    id: 7,
    category: "Night",
    title: "Weekly Exfoliation",
    description: "Gently exfoliate once or twice a week to remove dead skin cells and help products absorb better.",
    icon: "🧪",
  },
  {
    id: 8,
    category: "General",
    title: "Check Expiry Dates",
    description: "Using expired skincare can cause irritation. Look for the little open jar icon on your bottles!",
    icon: "📅",
  },
  {
    id: 9,
    category: "Night",
    title: "Eye Cream Gentleness",
    description: "Always use your ring finger to apply eye cream. It has the lightest touch for that delicate skin.",
    icon: "👁️",
  },
  {
    id: 10,
    category: "Morning",
    title: "Cold Water Splash",
    description: "Washing with cold water in the morning helps reduce puffiness and wakes up your circulation.",
    icon: "❄️",
  },
  {
    id: 11,
    category: "General",
    title: "Lip Care Matters",
    description: "Use an SPF lip balm during the day and a thick mask at night to prevent chapping.",
    icon: "💄",
  },
  {
    id: 12,
    category: "General",
    title: "Clean Your Phone",
    description: "Your phone screen carries more bacteria than a toilet seat. Wipe it daily to prevent cheek acne.",
    icon: "📱",
  }
];

const SkincareTips = () => {
  const [filter, setFilter] = useState("All");

  const filteredTips = filter === "All" 
    ? tipsData 
    : tipsData.filter(tip => tip.category === filter);

  return (
    <div className="tips-page">
      <header className="tips-header">
        <h1>Just Change these in your daily routine</h1>
        <p>Small habits, big results. Filter by your routine:</p>
        
        <div className="filter-buttons">
          {["All", "Morning", "Night", "General"].map((cat) => (
            <button 
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="tips-grid">
        {filteredTips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <div className="tip-icon">{tip.icon}</div>
            <span className="tip-category">{tip.category}</span>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincareTips;