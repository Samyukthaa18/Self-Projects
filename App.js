import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import CustomizedProfilePage from './components/CustomizedProfilePage';
import SchedulePage from './components/SchedulePage';
import AboutMe from './components/AboutMe';
import Layout from './components/Layout'; 

const App = () => {
 
  const [userProfile, setUserProfile] = useState({
    name: localStorage.getItem('userName') || '',  
    skinType: localStorage.getItem('skinType') || '', 
  });


  useEffect(() => {
    if (userProfile.name) {
      localStorage.setItem('userName', userProfile.name);
    }
  }, [userProfile.name]);

  return (
    <Router>
      <Layout> {/* Wrap all routes inside the Layout */}
        <Routes>
          <Route path="/" element={<HomePage userName={userProfile.name} setUserProfile={setUserProfile} />} />
          <Route path="/login" element={<LoginPage setUserProfile={setUserProfile} />} />
          <Route path="/profile" element={<ProfilePage userProfile={userProfile} setUserProfile={setUserProfile} />} />
          <Route path="/customized-profile" element={<CustomizedProfilePage />} />
          <Route path="/schedule" element={<SchedulePage userProfile={userProfile} />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


