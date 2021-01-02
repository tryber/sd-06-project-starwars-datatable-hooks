import React from 'react';
import r2d2 from '../images/rd2d.png';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <img src={ r2d2 } alt="R2d2 Robot from StarWars series" />
      <h1>Star Wars Data Table</h1>
      <p>Trybe Project</p>
    </div>
  );
}

export default Header;
