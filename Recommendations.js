// src/components/Recommendations.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar'; 

const Recommendations = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example API fetching makeup/skincare products based on skin type
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=skincare');
        const data = await response.json();
        setProducts(data.slice(0, 10)); // Limiting the results to the first 10 products
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the skincare products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <RecommendationsContainer>
       <NavBar />
      <h2>Recommended Skincare Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ProductList>
          {products.map((product, index) => (
            <ProductItem key={index}>
              <ProductName>{product.name}</ProductName>
              <ProductBrand>{product.brand}</ProductBrand>
              {product.image_link && <ProductImage src={product.image_link} alt={product.name} />}
              <ProductLink href={product.product_link} target="_blank" rel="noopener noreferrer">
                View Product
              </ProductLink>
            </ProductItem>
          ))}
        </ProductList>
      )}
    </RecommendationsContainer>
  );
};

export default Recommendations;

// Styled Components
const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductList = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ProductItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  color: #333;
`;

const ProductBrand = styled.p`
  font-size: 16px;
  color: #555;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px 0;
`;

const ProductLink = styled.a`
  font-size: 16px;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 15px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;



