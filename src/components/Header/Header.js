import React from 'react';
import styles from './Header.module.css';
import { withRouter } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={styles.Header}>
            <h3 className={styles.Logo} onClick={() => props.history.push('/')}>raBarbara</h3>
            <p
                className={styles.Cart}
                style={{ color: props.cartLength > 0 ? 'red' : 'black' }}
                onClick={props.cartClicked}>Cart</p>
            <p>Order History</p>
        </div>
    )
}


export default withRouter(Header);