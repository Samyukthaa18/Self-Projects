// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, googleProvider, facebookProvider } from '../firebase';

const LoginPage = ({ setUserName }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your custom authentication logic for username/password
    if (credentials.username && credentials.password) {
      setUserName(credentials.username);
      localStorage.setItem('userName', credentials.username);
      navigate('/profile');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const user = result.user;
      setUserName(user.displayName);
      localStorage.setItem('userName', user.displayName);  // Store username in localStorage
      navigate('/profile');
    } catch (error) {
      console.error('Error with Google login:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await auth.signInWithPopup(facebookProvider);
      const user = result.user;
      setUserName(user.displayName);
      localStorage.setItem('userName', user.displayName);  // Store username in localStorage
      navigate('/profile');
    } catch (error) {
      console.error('Error with Facebook login:', error);
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin}>
        <InputField
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <LoginButton type="submit">Login</LoginButton>
        <SocialButton onClick={handleGoogleLogin}>Login with Google</SocialButton>
        <SocialButton onClick={handleFacebookLogin}>Login with Facebook</SocialButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f4f6;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const LoginButton = styled.button`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SocialButton = styled.button`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

