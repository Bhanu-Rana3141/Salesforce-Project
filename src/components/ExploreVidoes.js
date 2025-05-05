import React, { useState } from 'react'
import styles from './ExploreVideos.module.css'
import Header from './Header'
import Search from './Search'
import Footer from './Footer'
import Section from './Section';

export default function ExploreVidoes() {

  const sections = [
    {
      heading: "Explore Videos",
      buttonText: "See All Videos",
      cards: [
        {
          image: 'images/exploreVideos1.png',
          title: 'Salesforce Event for Data + AI + CRM + Trust',
          industry: 'Industry Name',
          documentType: 'Video',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          btn: "Watch Now"
        },
        {
          image: 'images/exploreVideos2.png',
          title: 'Salesforce Event for Data + AI + CRM + Trust',
          industry: 'Industry Name',
          documentType: 'Video',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          btn: "Watch Now"
        },
        {
          image: 'images/exploreVideos3.png',
          title: 'Salesforce Event for Data + AI + CRM + Trust',
          industry: 'Industry Name',
          documentType: 'Video',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          btn: "Watch Now"
        }
      ]
    },
    {
      heading: "Explore Documents",
      buttonText: "See All Documents",
      cards: [
        {
          title: 'Salesforce Event for Data + AI + CRM + Trust',
          industry: 'Industry Name',
          documentType: 'PDF',
          description: "Digital transformation transforms how businesses operate and deliver value, giving them a competitive advantage. Learn more.",
          btn: "Learn More"
        },
        {
          title: 'Salesforce Event for Data + AI + CRM + Trust',
          industry: 'Industry Name',
          documentType: 'PDF',
          description: "Digital transformation transforms how businesses operate and deliver value, giving them a competitive advantage. Learn more.",
          btn: "Learn More"
        },
        {
          title: 'Salesforce Event for Data + AI + CRM + Trust',
          industry: 'Industry Name',
          documentType: 'PDF',
          description: "Digital transformation transforms how businesses operate and deliver value, giving them a competitive advantage. Learn more.",
          btn: "Learn More"
        }
      ]
    },
    {
      heading: "Explore Links",
      buttonText: "See All Links",
      cards: [
        {
          title: 'How To Use Your CRM For Advertising and Digital ',
          industry: 'Industry Name',
          documentType: 'LINK',
          description: "Digital transformation transforms how businesses operate and deliver value, giving them a competitive advantage. Learn more.",
          btn: "Learn More"
        },
        {
          title: 'Salesforce Event for Data + AI + CRM + Trust',
          industry: 'Industry Name',
          documentType: 'LINK',
          description: "Digital transformation transforms how businesses operate and deliver value, giving them a competitive advantage. Learn more.",
          btn: "Learn More"
        },
        {
          title: 'What Is Digital Transformation & How to Implement ?',
          industry: 'Industry Name',
          documentType: 'LINK',
          description: "Digital transformation transforms how businesses operate and deliver value, giving them a competitive advantage. Learn more.",
          btn: "Learn More"
        }
      ]
    }
  ]

  const [filterType, setFilterType] = useState("all");

  const getFilteredSections = () => {
    if (filterType === "all") {
      // Show only 3 cards per section
      return sections.map(section => ({
        ...section,
        cards: section.cards
      }));
    }

    if (filterType === "videos") {
      const videosSection = sections.find(sec => sec.heading.includes("Videos"));
      return [{
        ...videosSection,
        cards: videosSection.cards.slice(0, 3) // 1 row
      }];
    }

    if (filterType === "documents") {
      const documentsSection = sections.find(sec => sec.heading.includes("Documents"));
      // Duplicate cards to get 6 cards (2 rows with same 3 cards repeated)
      const repeatedCards = [...documentsSection.cards, ...documentsSection.cards];
      return [{
        ...documentsSection,
        cards: repeatedCards
      }];
    }

    if (filterType === "weblinks") {
      const linksSection = sections.find(sec => sec.heading.includes("Links"));
      // Duplicate cards to get 6 cards (2 rows with same 3 cards repeated)
      const repeatedCards = [...linksSection.cards, ...linksSection.cards];
      return [{
        ...linksSection,
        cards: repeatedCards
      }];
    }

    return [];
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Search setFilterType={setFilterType} />

        <div className={styles.sectionsContent}>
          {getFilteredSections().map((section, index) => (
            <Section
              key={index}
              heading={section.heading}
              buttonText={section.buttonText}
              cards={section.cards}
              showImages={index === 0} // Only first section shows images
              compact={index !== 0}  // Compact layout for Documents and Links
            />
          ))}
        </div>

        <Footer />
      </div>
    </>
  )
}
