import React from 'react';
import styles from './Banner.module.css';
import Logo from '../../assets/images/10-20-01.jpg';

const Banner = () => {
    return (
        <div className={styles.Banner}>
            <img src={Logo} />
        </div>
    )
}



export default Banner;