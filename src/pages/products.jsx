import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getdata = async () => {
      try {
        const response1 = await axios.get('https://dummyjson.com/products/category/beauty');

        setProducts(response1.data.products);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getdata();
  }, []);

  return (
    <div className="productscontainer">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}> Products</h1>

      <div className="productgrid">
        {products.map((item) => (
          <div key={item.id} className="productcard">
            <img 
              src={item.thumbnail} 
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