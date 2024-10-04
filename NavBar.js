import logo from '../assets/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({ userName, handleLogout }) => {
  return (
    <Nav>
      <LeftSide>
        <Logo to="/">
          <img src={logo} alt="Logo" />
        </Logo>
        <NavItems>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/profile">Profile</NavItem>
          <NavItem to="/schedule">Schedule</NavItem>
          <NavItem to="/about">About Me</NavItem>
        </NavItems>
      </LeftSide>
      <RightSide>
        {userName ? (
          <>
            <UserName>{userName}</UserName>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <LoginButton to="/login">Login</LoginButton>
        )}
      </RightSide>
    </Nav>
  );
};

export default NavBar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Align left and right sections */
  align-items: center;
  width: 100%; /* Full width */
  padding: 10px 20px; /* General padding */
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  img {
    height: 40px; /* Adjust logo size */
    width: auto;
    margin-right: 20px; /* Space between logo and nav items */
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px; /* Space between nav items */
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between username and button */
  margin-left: auto;
  padding-right: 20px; /* Space from the right edge of the screen */
`;

const UserName = styled.span`
  font-size: 18px;
  color: #333;
`;

const LoginButton = styled(Link)`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  white-space: nowrap;
  margin-right: 20px; /* Add some space from the right */
  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  white-space: nowrap;
  margin-right: 20px; /* Space from the right */
  &:hover {
    background-color: #0056b3;
  }
`;
