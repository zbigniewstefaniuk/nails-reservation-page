import Feed from "react-instagram-authless-feed"

import styles from '../styles/contact.module.css'

function Footer() {
  return (
    <section className={styles.contactMainSection} id="contact">
      <div className={styles.header}>
      <h1>Kontakt</h1>
      </div>
      <div className={styles.contactInfo}>
        <h2>joannafajto95@gmail.com</h2>
        <h2>+48 512 602 455</h2>
        <div className='insta-photos'>
          <h2>Instagram</h2>
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
