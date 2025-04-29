import React from 'react';
import styles from './Screen3Card.module.css';

export default function Screen3Card({ image, title, industryName, documentType, description, btn }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.container1}>
                <img src={image} alt="Video Thumbnail" />
            </div>

            <div className={styles.container2}>
                {title}
            </div>

            <div className={styles.container3}>
                <div className={styles.industryPara}>
                    <p className={styles.industry}>Industry</p>
                    <p>{industryName}</p>
                </div>
                <div className={styles.documentPara}>
                    <p className={styles.document}>Document Type</p>
                    <p>{documentType}</p>
                </div>
            </div>

            <div className={styles.container4}>
                {description}
            </div>

            <div className={styles.container5}>
                <button>{btn}</button>
            </div>
        </div>
    );
}
