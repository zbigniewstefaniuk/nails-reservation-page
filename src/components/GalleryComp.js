import Images from "./Images"

import styles from '../styles/Gallery.module.css'

function GalleryComp() {
    return (
        <div>
            <h1>Tu bedzie Galeria 😂</h1>
            <div className={styles.main_images_container}>
            <Images />
            </div>
        </div>
    )
}

export default GalleryComp
