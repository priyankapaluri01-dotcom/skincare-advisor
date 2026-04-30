import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchBeautyProducts } from '../utils/productSlice'; 
import './products.css';

const Products = () => {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
   
    dispatch(fetchBeautyProducts());
  }, [dispatch]);

  if (loading) return <div className="loader">Loading Beauty Collection... ✨</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="productscontainer">
      <h2 className="category-heading">Beauty Collection</h2>
      <div className="productgrid">
        {items.map((item) => (
          <div key={item.id} className="productcard">
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              className="productimage" 
            />
            <div className="productinfo">
              <h3 className="producttitle">{item.title}</h3>
              <p className="productbrand">{item.brand}</p>
              <p className="productprice">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;