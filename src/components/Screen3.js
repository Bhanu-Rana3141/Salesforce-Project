import React from 'react'
import styles from './Screen3.module.css'
import Header from './Header'
import Screen3Content from './Screen3Content'
import Footer from './Footer'

export default function Screen3() {
  return (
    <>
        <div className={styles.screen3Container}>
            <Header/>
            <div className={styles.contentArea}>
                <Screen3Content/>
            </div>
            <Footer/>
        </div>
    </>
  )
}
