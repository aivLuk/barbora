import React from 'react';
import styles from './MobileMenu.module.css';
import { Link } from 'react-router-dom';

const MobileMenu = (props) => {
    const menu = (
        <div className={styles.Menu}>
            <Link to="/dairy" onClick={props.menuItemClicked}>Dairy</Link>
            <Link to="/bread" onClick={props.menuItemClicked}>Bread</Link>
            <Link to="/vegetables" onClick={props.menuItemClicked}>Vegetables</Link>
            <Link to="/fruits" onClick={props.menuItemClicked}>Fruits</Link>
            <Link to="/meat" onClick={props.menuItemClicked}>Meat</Link>
            <p
                className={styles.Cart}
                style={{ color: props.cartLength > 0 ? 'red' : 'black' }}
                onClick={props.cartClicked}>Cart</p>
            <Link to="/order-history" onClick={props.menuItemClicked}>Order History</Link>
        </div>
    )

    return (
        <div>
            {props.active ? menu : props.children}
        </div>
    )
}

export default MobileMenu;