import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/home";


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.leftPart}>
          <img className={styles.logo} src='images\logo.png'></img>
        </div>

        <div className={styles.hamburgerIcon} onClick={toggleMenu}>
          <FaBars size={24} />
        </div>

        <div className={`${styles.rightPart} ${isMenuOpen ? styles.showMenu : ''} ${isHome ? styles.top80 : styles.top120}`}>
          <Link to='/home'>Home</Link>
          <Link to='/explore-videos'>Explore</Link>
          <Link to='/related-content'>Content</Link>
          <Link to=''>Resources <img className={styles.dropdownIcon} src='images\dropdownIcon.png'></img> </Link>
          <Link to=''>Profile <img className={styles.dropdownIcon} src='images\dropdownIcon.png'></img></Link>
        </div>
      </div>
    </>
  )
}
