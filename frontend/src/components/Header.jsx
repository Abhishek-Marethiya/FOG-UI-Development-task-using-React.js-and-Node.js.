import React, { useState } from 'react';
import Navbar from './Navbar';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
    if(userMenuOpen)
    setUserMenuOpen(!userMenuOpen)
  } 
  const toggleUserMenu = () =>{
   
    setUserMenuOpen(!userMenuOpen);
    if(menuOpen) setMenuOpen(!menuOpen);
  } 

  return (
    <header className="header">
      <div className="logo">
        <img src="/frontend/src/assets/images/meubel-house-logos-05.png" alt="Furniro Logo" />
        <h1>Furniro</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <img src="/src/assets/icons/icons8-hamburger-menu-50.png" alt="Menu" />
      </div>
      <Navbar isOpen={menuOpen} />
      <div className="header-icons active">
      <div className="header-icon">
      <img src="/src/assets/icons/mdi_account-alert-outline.svg" alt="Account Alert" />
      </div>
      <div className="header-icon">
      <img src="/src/assets/icons/akar-icons-search.svg" alt="Search" />
      </div>
      <div className="header-icon">
      <img src="/src/assets/icons/akar-icons-heart.svg" alt="Favorites" />
      </div>
      <div className="header-icon">
      <img src="/src/assets/icons/ant-design-shopping-cart-outlined.svg" alt="Cart" />
      </div>
      </div>
      <div className="user-menu inactive">
        <div className="user-menu-icon " onClick={toggleUserMenu}>
          <img src="/src/assets/icons/icons8-user-menu-50.png" alt="User Menu" />
        </div>
        {userMenuOpen && (
          <div className="user-menu-dropdown">
            <div className="user-menu-item">
              <img src="/src/assets/icons/ant-design-shopping-cart-outlined.svg" alt="Cart" />
              <span>Cart</span>
            </div>
            <div className="user-menu-item">
              <img src="/src/assets/icons/akar-icons-heart.svg" alt="Favorites" />
              <span>Favorites</span>
            </div>
            <div className="user-menu-item">
              <img src="/src/assets/icons/mdi_account-alert-outline.svg" alt="Profile" />
              <span>Profile</span>
            </div>
            <div className="user-menu-item">
              <img src="/src/assets/icons/akar-icons-search.svg" alt="Search" />
              <span>Search</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
