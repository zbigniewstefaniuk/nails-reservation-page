import { Link } from 'react-router-dom'

import styles from '../styles/home.module.css'


function Home() {
    return (
        <section id="home" className={styles.homeSection}>
            <div className={styles.homeSectionLanding}>
                <div className={styles.homeHeroText}>
                    <h1>Umów się na paznokcie juz teraz!</h1>
                </div>
                <div className={styles.bookNails}>
                    <Link to="/booknail" >
                        <button className={styles.homeButton}>
                            Umów się!
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Home
