import React from 'react'
import styles from './Home.module.css'
import Header from './Header'
import Maincontent from './Maincontent'
import Footer from './Footer'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.contentArea}>
        <Maincontent />
      </div>
      <Footer/>
    </div>
  )
}