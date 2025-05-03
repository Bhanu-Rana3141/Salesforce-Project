import React from 'react';
import styles from './Section.module.css';

export default function Section({ heading, buttonText, cards, showImages, compact }) {
    return (
        <div className={`${styles.section} ${compact ? styles.sectionCompact : ''}`}>
            <div className={styles.sectionHeader}>
                <h2>{heading}</h2>
                <button>{buttonText}</button>
            </div>

            <div className={styles.cardRow}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        {showImages && card.image ? (
                            <>
                                <p>
                                    <img src={card.image} alt={card.title} className={styles.cardImage} />
                                </p>

                                <p className={styles.title}>
                                    {card.title}
                                </p>

                                <div className={styles.industryDocument}>
                                    <div className={styles.industryContainer}>
                                        <p className={styles.industry}>Industry</p>
                                        <p className={styles.industryType}>{card.industry}</p>
                                    </div>
                                    <div className={styles.documentContainer}>
                                        <p className={styles.document}>Document Type</p>
                                        <p className={styles.documentType}>{card.documentType}</p>
                                    </div>
                                </div>

                                <p className={styles.description}>
                                    {card.description}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className={styles.title}>{card.title}</p>

                                <p className={styles.description}>{card.description}</p>

                                <div className={styles.industryDocument}>
                                    <div className={styles.industryContainer}>
                                        <p className={styles.industry}>Industry</p>
                                        <p className={styles.industryType}>{card.industry}</p>
                                    </div>
                                    <div className={styles.documentContainer}>
                                        <p className={styles.document}>Document Type</p>
                                        <p className={styles.documentType}>{card.documentType}</p>
                                    </div>
                                </div>
                            </>
                        )}
                        <button className={styles.btn}>{card.btn}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
