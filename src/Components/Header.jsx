import React from "react";
const Header = ({ cartCount, onSearch }) => (
  <header>
    <h1>Ecommerce 2025</h1>
    <input type="text" placeholder="Search products..." onChange={(e)=>onSearch(e.target.value)} />
    <span>🛒 {cartCount}</span>
  </header>
);
export default Header;
