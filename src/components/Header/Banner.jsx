import React from 'react'
import styles from '../Header/Banner.module.css'
import Header from './Header'

const Banner = () => {
  return (
    <>
    <Header />
    <section className={styles.header}>
        <div className={styles.content}>
           <h2>Always Choose Good</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing alit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud.
           </p>
        <a href='#' className={styles.btn}>Our Menu</a>
        </div>
    </section>
    </>
  )
}

export default Banner