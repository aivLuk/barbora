import React from 'react';
import styles from './Header.module.css';
import { withRouter, Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={styles.Header}>
            <h3 className={styles.Logo} onClick={() => props.history.push('/')}>raBarbara</h3>
            <p
                className={styles.Cart}
                style={{ color: props.cartLength > 0 ? 'red' : 'black' }}
                onClick={props.cartClicked}>Cart</p>
            <Link to="/order-history">Order History</Link>
        </div>
    )
}


export default withRouter(Header);