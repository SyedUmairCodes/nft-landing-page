import React from 'react'
import "./header.css"
import 'remixicon/fonts/remixicon.css'
const Header = () => {

  return (
    <header className="header" id="header">
    <nav className="nav container">
      <h1 href="/" className="nav__logo">NFT.io</h1>
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link"><i className="ri-home-line"></i><span>Home</span></a></li>
          <li className="nav__item"><a href="#collection" className="nav__link"><i className="ri-collage-line"></i><span>Collections</span></a></li>
          <li className="nav__item"><a href="#faq" className="nav__link"><i className="ri-award-line"></i><span>FAQs</span></a></li>
          <li className="nav__item"><a href="#community" className="nav__link"><i className="ri-account-box-line"></i><span>Community</span></a></li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header