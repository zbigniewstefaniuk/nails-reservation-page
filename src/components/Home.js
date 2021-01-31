import { Link } from 'react-router-dom'

import styles from '../styles/home.module.css'
import Navbar from './Navbar/Navbar'


function Home() {
    return (
        <section className={styles.homeSection}>
            <Navbar />
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
