import React from 'react'
import styles from './Search.module.css'
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export default function Search({ setFilterType }) {

    const location = useLocation(); 
    const defaultFilter = location.pathname === "/related-content" ? "videos" : "all"; 
    return (
        <>
            <div className={styles.container}>
                <div className={styles.searchBy}>
                    Search By :
                </div>

                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        type='text'
                        placeholder='Name, Description Or Category'
                    />
                    <FaSearch className={styles.icon} />
                </div>

                <div className={`${styles.selectWrapper} ${styles.recommendedSelect}`}>
                    <select className={styles.select}>
                        <option value="">Recommended</option>
                    </select>
                    <FaChevronDown className={styles.selectIcon} />
                </div>

                <div className={`${styles.selectWrapper} ${styles.typeSelect}`}>
                    <select className={styles.select} onChange={(e) => setFilterType(e.target.value)} defaultValue={defaultFilter} >
                        <option value="all">All</option>
                        <option value="videos">Videos</option>
                        <option value="documents">Documents</option>
                        <option value="weblinks">Weblinks</option>
                    </select>
                    <FaChevronDown className={styles.selectIcon} />
                </div>

            </div>
        </>
    );
}
