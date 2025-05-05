import React from 'react';
import styles from './RelatedContent.module.css';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

export default function RelatedContent() {
    const relatedCards = [
        {
            image: 'images/exploreVideos1.png',
            title: 'Salesforce Event for Data + AI + CRM + Trust',
            industry: 'Industry Name',
            documentType: 'Video',
        },
        {
            image: 'images/exploreVideos1.png',
            title: 'Salesforce Event for Data + AI + CRM + Trust',
            industry: 'Industry Name',
            documentType: 'Video',
        },
        {
            image: 'images/exploreVideos1.png',
            title: 'Salesforce Event for Data + AI + CRM + Trust',
            industry: 'Industry Name',
            documentType: 'Video',
        }
    ];

    return (
        <div className={styles.container}>
            <Header />
            <Search />

            <div className={styles.content}>
                <div className={styles.leftPart}>
                    <p>
                        <img className={styles.leftImage} src='images/relatedContent.png' alt="Related" />
                    </p>
                    <p className={styles.title}>Salesforce Event for Data + AI + CRM + Trust</p>
                    <p className={styles.para}>In a 44-year career, Tony Fernicola, President and Chief Customer Officer Salesforce has seen the craft of sales become much more technical. Today, it’s a team sport, with skilled players supported by real-time data.</p>
                    <p className={styles.para}>In the future, he believes Einstein GPT’s generative AI will increase the productivity of sales executives and service agents, giving us the ability to sell more by servicing customers better.</p>
                    <p className={styles.para}>Whether it’s creating sophisticated synopses of Salesforce accounts or acting as an admin assistant for meetings and follow-ups, generative AI will drive revenue, reduce costs and help us form relationships.</p>
                    <p className={styles.para}>Stay up to date with the latest episodes, visit the Executive Conversations YouTube playlist.</p>
                </div>

                {/* card section */}
                <div className={styles.cardRow}>
                    <div className={styles.heading}>
                        Related Content
                    </div>

                    <div className={styles.cardList}>
                        {relatedCards.map((card, index) => (
                            <div key={index} className={styles.card}>
                                <img src={card.image} alt={card.title} className={styles.cardImage} />
                                <p className={styles.cardTitle}>{card.title}</p>
                                <div className={styles.industryDocument}>
                                    <div>
                                        <p className={styles.industry}>Industry</p>
                                        <p className={styles.industryType}>{card.industry}</p>
                                    </div>
                                    <div>
                                        <p className={styles.document}>Document Type</p>
                                        <p className={styles.documentType}>{card.documentType}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}