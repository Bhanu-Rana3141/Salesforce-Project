import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div className={styles.headerContainer}>
            <div className={styles.leftPart}>
                <img className={styles.logo} src='images\logo.png'></img>
            </div>
            <div className={styles.rightPart}>
                <Link to=''>About Us</Link>
                <Link to=''>Resources <img className={styles.dropdownIcon} src='images\dropdownIcon.png'></img> </Link>
                <Link to=''>Recommendation</Link>
                <Link to=''>Profile <img className={styles.dropdownIcon} src='images\dropdownIcon.png'></img></Link>
            </div>
        </div>
    </>
  )
}
