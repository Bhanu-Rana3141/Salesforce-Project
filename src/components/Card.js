import React from 'react';
import styles from './Card.module.css';

export default function Card({
    image,
    venue,
    title,
    description,
    eventDateTime,
    eventAgenda,
    btn1,
    btn2,
}) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.container1}>
                <div className={styles.cardImage}>
                    <img src={image} alt="Event" />
                </div>
                <div className={styles.text}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.description}>
                        Event Platform Link : <span>Click Here</span>
                    </p>
                </div>
            </div>

            <div className={styles.container2}>
                <div className={styles.para}>
                    <p className={styles.venue}>Venue</p>
                    <p>{venue}</p>
                </div>

                <div className={styles.dateTimePara}>
                    <p className={styles.dateTimeHeading}>Event Date & Time</p>
                    <p className={styles.dateTime}>{eventDateTime}</p>
                </div>

                <div className={styles.eventAgendaPara}>
                    <p className={styles.eventAgenda}>Event Agenda</p>
                    <p className={styles.sales}>{eventAgenda}</p>
                </div>
            </div>

            <div className={styles.container3}>
                <button className={styles.btn1}>{btn1}</button>
                <button className={styles.btn2}>{btn2}</button>
            </div>
        </div>
    );
}