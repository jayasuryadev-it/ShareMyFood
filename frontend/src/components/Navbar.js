import React from 'react';
import './Navbar.css';

const Navbar = () => {
  console.log("✅ Navbar Loaded"); // Debugging log

  return (
    <nav className="navbar">
      <div className="logo">ShareMyFood</div>
    </nav>
  );
};

export default Navbar;