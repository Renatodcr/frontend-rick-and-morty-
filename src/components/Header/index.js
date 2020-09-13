import React from 'react';
import './style.css';
import img from '../../img/rick.png';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="imgHeader">
          <img src={img} alt=""/>
        </div>
        <h1>Rick and Morty</h1>
      </div>
    </div>
  );
}

export default Header;
