// src/components/AboutMe.js
import React from 'react';
import styled from 'styled-components';


const AboutMe = () => {
  return (
    <AboutContainer>
     
      <h2>About Skin Decoder</h2>
      <Description>
        Welcome to Skin Decoder, your personalized skincare assistant! Our goal is to help you
        understand your skin type, find the right skincare products, and create a skincare routine
        that suits your unique needs.
      </Description>
      <Description>
        Whether you're dealing with dry, oily, sensitive, combination, or acne-prone skin, Skin
        Decoder offers expert recommendations and a personalized skincare schedule. Our philosophy
        is rooted in the concept of skin cycling, where we rotate different skincare products based
        on your skin’s needs to ensure optimal health and radiance.
      </Description>
      <Description>
        We believe that everyone deserves healthy, glowing skin, and we're here to make that
        journey easier and more informed. Thank you for trusting us with your skincare journey!
      </Description>
      <Footer>© 2024 Skin Decoder. All rights reserved.</Footer>
    </AboutContainer>
  );
};

export default AboutMe;

// Styled Components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Footer = styled.footer`
  margin-top: 30px;
  font-size: 14px;
  color: #999;
`;

