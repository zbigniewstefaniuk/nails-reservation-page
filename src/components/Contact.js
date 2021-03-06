import Feed from "react-instagram-authless-feed"

import styles from '../styles/contact.module.css'

import contactBgImg from '../assets/contactBgImg.png'

function Footer() {
  return (
    <section className={styles.contactMainSection} id="contact">
    
      <div className={styles.header}>
      <h1>Kontakt</h1>
      </div>
        <img className={styles.photo} src={contactBgImg} />
      <div className={styles.contactInfo}>
        <p3>joannafajto95@gmail.com</p3>
        <p3>+48 512 602 455</p3>
        <div className='insta-photos'>
        <a href="https://www.instagram.com/fajtojoanna/" >

          <p3>Instagram</p3>
        </a>
          {/* <Feed
          userName="fajtojoanna"
          className="Feed"
          classNameLoading="Loading"
          limit="3"
        /> */}
        </div>
      </div>
    </section>
  )
}

export default Footer
