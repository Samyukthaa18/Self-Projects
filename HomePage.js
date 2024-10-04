import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import step1Image from '../assets/step1.png';
import step2Image from '../assets/step2.png';
import step3Image from '../assets/step3.png';


const HomePage = ({ userName, setUserName }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userProfile');
    setUserName('');
    navigate('/');
  };

  return (
    <HomeContainer>
 
      <TitleContainer>
        <h1>Skin Decoder</h1>
        <p>{userName ? `Hello, ${userName}!` : 'Decode your skin'}</p>
      </TitleContainer>
      <StepsContainer>
        <Step>
          <img src={step1Image} alt="Step 1" />
          <StepText>STEP-1</StepText>
        </Step>
        <Step>
          <img src={step2Image} alt="Step 2" />
          <StepText>STEP-2</StepText>
        </Step>
        <Step>
          <img src={step3Image} alt="Step 3" />
          <StepText>STEP-3</StepText>
        </Step>
      </StepsContainer>
  
    </HomeContainer>
  );
};

export default HomePage;


// Styled Components
const HomeContainer = styled.div`
  text-align: center;
  background-color: #f3f4f6;
  padding: 20px;
`;

const TitleContainer = styled.div`
  margin: 50px 0;
  h1 {
    font-size: 48px;
    color: #333;
  }
  p {
    font-size: 24px;
    color: #555;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StepText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;




const ActionButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: ${props => (props.isLogout ? '#ff4d4d' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.isLogout ? '#e60000' : '#0056b3')};
  }
`;