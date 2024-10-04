// src/components/CustomizedProfilePage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CustomizedProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfileData(savedProfile);
    } else {
      navigate('/profile'); // Redirect to profile page if no profile data found
    }
  }, [navigate]);

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <ProfileContainer>
      <h2>{`Welcome back, ${profileData.name}`}</h2>
      <ProfileDetails>
        <DetailItem>
          <Label>Age:</Label> <Value>{profileData.age}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Skin Type:</Label> <Value>{profileData.skinType}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Products You Use:</Label> <Value>{profileData.products}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Products That Irritate Your Skin:</Label> <Value>{profileData.irritants}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Skin Concerns:</Label> <Value>{profileData.concerns}</Value>
        </DetailItem>
      </ProfileDetails>
      <ActionButton onClick={() => navigate('/schedule')}>View Skincare Schedule</ActionButton>
    </ProfileContainer>
  );
};

export default CustomizedProfilePage;

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ProfileDetails = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #555;
`;

const Value = styled.span`
  color: #333;
`;

const ActionButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
