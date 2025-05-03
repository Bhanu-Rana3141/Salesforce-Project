import React from 'react'
import styles from './Maincontent.module.css'
import Card from './Card'

export default function Maincontent() {

  const cardData = [
    {
      image: "images/card.png",
      venue: "Ball Room, Auditorium 1",
      title: "Salesforce Event For Data + AI + CRM + Trust",
      description: "Affiliate Marketing Involves Promoting Another Business’s Products Or Services Online.",
      eventDateTime: "15-01-2025 | 12:00 PM",
      eventAgenda: "Sales Event",
      btn1: "View Resources",
      btn2: "Register Here"
    },
    {
      image: "images/card.png",
      venue: "Ball Room, Auditorium 1",
      title: "Salesforce Event For Data + AI + CRM + Trust",
      description: "Affiliate Marketing Involves Promoting Another Business’s Products Or Services Online.",
      eventDateTime: "15-01-2025 | 12:00 PM",
      eventAgenda: "Sales Event",
      btn1: "View Resources",
      btn2: "Register Here"
    },
    {
      image: "images/card.png",
      venue: "Ball Room, Auditorium 1",
      title: "Salesforce Event For Data + AI + CRM + Trust",
      description: "Affiliate Marketing Involves Promoting Another Business’s Products Or Services Online.",
      eventDateTime: "15-01-2025 | 12:00 PM",
      eventAgenda: "Sales Event",
      btn1: "View Resources",
      btn2: "Register Here"
    },
    {
      image: "images/card.png",
      venue: "Ball Room, Auditorium 1",
      title: "Salesforce Event For Data + AI + CRM + Trust",
      description: "Affiliate Marketing Involves Promoting Another Business’s Products Or Services Online.",
      eventDateTime: "15-01-2025 | 12:00 PM",
      eventAgenda: "Sales Event",
      btn1: "View Resources",
      btn2: "Register Here"
    },
  ];

  return (
    <>
      <div className={styles.mainContentContainer}>
        <div className={styles.heading}>List Of Campaign/ Events</div>

        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              venue={data.venue}
              title={data.title}
              description={data.description}
              eventDateTime={data.eventDateTime}
              eventAgenda={data.eventAgenda}
              btn1={data.btn1}
              btn2={data.btn2}
            />
          ))}
        </div>
      </div>

    </>
  )
}
