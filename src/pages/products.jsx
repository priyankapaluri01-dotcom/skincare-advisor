import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
        setLoading(true);
        // Fetching specifically from the beauty category
        const response = await axios.get('https://dummyjson.com/products/category/beauty');
        
        // DummyJSON returns an object with a 'products' array
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    getdata();
  }, []);

  if (loading) return <div className="loader">Loading Beauty Collection... ✨</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="productscontainer">
      <h2 className="category-heading">Beauty Collection</h2>
      <div className="productgrid">
        {products.map((item) => (
          <div key={item.id} className="productcard">
            <img 
              src={item.thumbnail} // DummyJSON uses 'thumbnail'
              alt={item.title} 
              className="productimage" 
            />
            <div className="productinfo">
              <h3 className="producttitle">{item.title}</h3>
              <p className="productbrand">{item.brand}</p>
              <p className="productprice">${item.price}</p>
              <button className="add-to-cart-btn">Add to Bag</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;