import React from 'react';
import Logo from './ic2c.png';
import './login.css';

export default function Header() {
  return (
    <>
      <header className="head">

        <div>
          <span className="logo">
            <img src={Logo} alt="logo image" className="imga" />
          </span>
          <span className="slogan" style={{fontSize:"17px"}}>
            YOUR FUTURE,OUR PASSION!!
          </span>
        </div>
      </header>
      <div className="navbar">
      </div>
    </>
  )
}
