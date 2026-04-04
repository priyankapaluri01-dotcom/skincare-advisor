import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import './Routine.css'; 
const Routine = () => {
  const { type } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoutineData = async () => {
      setLoading(true);
      setError(null);
      const apiType = type === 'makeup' ? 'foundation' : 'moisturizer';
      try {
        const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${apiType}`);
        setProducts(response.data.slice(30,50)); 
      } catch (err) {
        setError("Something went wrong. Please try again!");
      } finally {
        setLoading(false);
      }
    };
    fetchRoutineData();
  }, [type]); 
  return (
    <div className="routine-container">
      <header className="routine-header">
        <h1>Your Personalized <span className="highlight">{type}</span></h1>
        <p>Curated selections for your natural glow.</p>
      </header>
      {loading ? (
        <div className="loading-state">Finding the best products for you...</div>
      ) : error ? (
        <div className="error-state">{error}</div>
      ) : (
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <div className="img-wrapper">
                <img 
                  src={item.image_link.replace('http://', 'https://')} 
                  alt={item.name} 
                  onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                />
              </div>
              <div className="info">
                <span className="brand">{item.brand}</span>
                <h4>{item.name}</h4>
                <p className="price">₹{Math.round(item.price * 83)}</p>
                <button className="view-btn">View Details</button>
              </div>
               
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Routine;