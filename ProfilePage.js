import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';  

const ProfilePage = ({ userProfile, setUserProfile }) => {
  const [profileData, setProfileData] = useState({
    name: userProfile.name || '',
    age: userProfile.age || '',
    skinType: userProfile.skinType || '',
    products: userProfile.products || '',
    irritants: userProfile.irritants || '',
    concerns: userProfile.concerns || '',
  });

  const [isProfileSaved, setIsProfileSaved] = useState(false);  
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfileData(savedProfile);  
      setIsProfileSaved(true);  
    }
  }, []);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleSave = () => {
   
    setUserProfile(profileData);


    localStorage.setItem('userProfile', JSON.stringify(profileData));

    setIsProfileSaved(true);  
    alert('Profile Saved!');
  };

  return (
    <ProfileContainer>
      <h2>{profileData.name ? `Welcome, ${profileData.name}` : 'Create Your Profile'}</h2>

      <form>
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          value={profileData.name}
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="age"
          placeholder="Age"
          value={profileData.age}
          onChange={handleChange}
        />
        <SelectField
          name="skinType"
          value={profileData.skinType}
          onChange={handleChange}
        >
          <option value="">Select Skin Type</option>
          <option value="dry">Dry</option>
          <option value="oily">Oily</option>
          <option value="sensitive">Sensitive</option>
          <option value="combination">Combination</option>
        </SelectField>
        <TextArea
          name="products"
          placeholder="Products You Use"
          value={profileData.products}
          onChange={handleChange}
        />
        <TextArea
          name="irritants"
          placeholder="Products That Irritate Your Skin"
          value={profileData.irritants}
          onChange={handleChange}
        />
        <TextArea
          name="concerns"
          placeholder="Your Skin Concerns"
          value={profileData.concerns}
          onChange={handleChange}
        />
        <SaveButton type="button" onClick={handleSave}>
          Save Profile
        </SaveButton>
      </form>

      {isProfileSaved && (
        <ViewScheduleButton to="/schedule">View Schedule</ViewScheduleButton>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SelectField = styled.select`
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SaveButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ViewScheduleButton = styled(Link)`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #28a745;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
  &:hover {
    background-color: #218838;
  }
`;
