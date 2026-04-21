import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get('https://69e5c59cce4e908a155e6301.mockapi.io/apivi/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getdata();
  }, []);
  return (
    <div className="productscontainer">
      <h2 className="category-heading">Products Collection</h2>
      <div className="productgrid">
       
        {products?.map((item) => (
          <div key={item.id} className="productcard">
            
            <img 
              src={item.image} 
              alt={item.title} 
              className="productimage" 
            />
            <div className="productinfo">
              <h3 className="producttitle">{item.title}</h3>
              <p className="productprice">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;