import React from 'react';
import styles from './Screen3Content.module.css';
import Screen3Card from './Screen3Card';

export default function Screen3Content() {
    const card1Data = [
        {
            image: "images/screen3img1.png",
            title: "Salesforce Event for Data + AI + CRM + Trust",
            industryName: "Industry Name",
            documentType: "Video",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            btn: "Watch Now",
        },
        {
            image: "images/screen3img2.png",
            title: "Salesforce Event for Data + AI + CRM + Trust",
            industryName: "Industry Name",
            documentType: "Video",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            btn: "Watch Now",
        },
        {
            image: "images/screen3img3.png",
            title: "Salesforce Event for Data + AI + CRM + Trust",
            industryName: "Industry Name",
            documentType: "Video",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            btn: "Watch Now",
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <p>Explore Videos</p>
                <button>See All Videos</button>
            </div>

            <div className={styles.container2}>
                {card1Data.map((data, index) => (
                    <Screen3Card key={index} {...data} />
                ))}
            </div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
