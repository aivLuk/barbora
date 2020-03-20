import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const style = { color: '#f05e23', backgroundColor: '#ddd' }
    return (
        <div className={styles.Sidebar}>
            <NavLink to="/dairy" activeStyle={style}>Dairy</NavLink>
            <NavLink to="/bread" activeStyle={style}>Bread</NavLink>
            <NavLink to="/vegetables" activeStyle={style}>Vegetables</NavLink>
            <NavLink to="/fruits" activeStyle={style}>Fruits</NavLink>
            <NavLink to="/meat" activeStyle={style}>Meat</NavLink>
        </div>
    )
}


export default Sidebar;