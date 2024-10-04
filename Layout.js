// src/components/Layout.js
import React from 'react';
import NavBar from './NavBar'; 

const Layout = ({ children }) => {
  return (
    <>
      <NavBar /> {/* NavBar is always shown */}
      <main>{children}</main> {/* Render the page content */}
    </>
  );
};

export default Layout;
