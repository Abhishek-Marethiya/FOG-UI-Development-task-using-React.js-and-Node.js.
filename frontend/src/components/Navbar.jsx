import React from 'react';

function Navbar({ isOpen }) {
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
