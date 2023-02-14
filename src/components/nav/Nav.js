import React, { useState } from "react";
import "./Nav.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Nav() {

  const [isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false)

  const MENU = [
      {
          title: 'Home',
          Link: '/'
      },
      {
          title: 'Product',
          Link: '/Product'
      },
      {
          title: 'Pricing',
          Link: '/Pricing'
      },
      {
          title: 'Contact',
          Link: '/Contact'
      } 
  ]

  const handleOnClick = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo"><Link to="/">Legalide</Link></div>
        <div className="right-section">
          <div className="menu">
            <ul className="desktop-menu">
                {
                  MENU.map((menuItem, index) => {
                      return <li key={index}><Link to={menuItem.Link}>{menuItem.title}</Link></li>
                  })
              }
              
            </ul>
          {
              isMobileMenuOpen ?  
              <ul className='mobile-menu'>
              {
                  MENU.map((menuItem, index) => {
                      return <li key={index}><Link to={menuItem.Link}>{menuItem.title}</Link></li>
                  })
              }
             </ul> : ''
          }
          </div>
          <div className="icons">
            <img src="assets/img/zoom.png" alt="zoom" />
            <img src="assets/img/basket.png" alt="basket" />
            {isMobileMenuOpen ? <FontAwesomeIcon className='mobile-menu-button' icon={faXmark} onClick={handleOnClick} /> :
          <FontAwesomeIcon className='mobile-menu-button' icon={faBars} onClick={handleOnClick} />}
          </div>
        </div>
      </div>
      </nav>
  );
}


