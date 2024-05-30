import React from 'react';
import styles from './NotFound.module.css'
import alien from './image/lll.jpg'

function NotFound() {
    return (
        <div className={styles.block}>
            <div className={styles.block_text}>
                <span className={styles.text_num}>404</span>
                <p className={styles.text_p}>Ooops! Looks like this page or resource doesn't exist.</p>
                <button className={styles.btn_back}>Back<img src={alien} alt="back" width={50} height={50}/></button>
            </div>
        </div>
    );
}

export default NotFound;