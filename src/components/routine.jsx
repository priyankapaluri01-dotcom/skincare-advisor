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
      const MAKEUP_URL = "https://corsproxy.io/?https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation";
      const SKINCARE_URL = "https://corsproxy.io/?https://world.openbeautyfacts.org/cgi/search.pl?action=process&tagtype_0=category&tag_contains_0=contains&tag_0=face&json=true";

      try {
        let response;
        let normalizedData = [];

        if (type === 'makeup') {
          response = await axios.get(MAKEUP_URL);
          normalizedData = response.data.slice(0, 20).map(item => ({
            id: item.id,
            name: item.name,
            brand: item.brand || 'Premium Brand',
            price: item.price ? Math.round(item.price * 83) : null,
            image: item.image_link
          }));
        } else {
          response = await axios.get(SKINCARE_URL);
          normalizedData = response.data.products.slice(0, 20).map(item => ({
            id: item._id,
            name: item.product_name,
            brand: item.brands || 'Natural Care',
            price: null, 
            image: item.image_url
          }));
        }
        
        setProducts(normalizedData);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("We couldn't reach the beauty vault. Please try again later!");
      } finally {
        setLoading(false);
      }
    };

    fetchRoutineData();
  }, [type]);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x400?text=Product+Image';
  };

  return (
    <div className="routine-container">
      <header className="routine-header">
        <h1>Your Personalized <span className="highlight">{type}</span></h1>
        <p>Curated for your specific skin needs.</p>
      </header>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Fetching the best for you...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">Retry</button>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="img-wrapper">
                <img 
                  src={product.image?.replace('http://', 'https://')} 
                  alt={product.name} 
                  onError={handleImageError}
                />
              </div>
              <div className="info">
                <span className="brand-tag">{product.brand}</span>
                <h4 className="product-title">{product.name}</h4>
                <div className="card-footer">
                  <span className="price-tag">
                    {product.price ? `₹${product.price}` : 'Check Store'}
                  </span>
                  <button className="view-btn">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Routine;