import React from 'react';
import styles from './Backdrop.module.css';
import Cart from '../../../components/Cart/Cart';

const Backdrop = (props) => {
    return (
        <div>
            {props.active ? <Cart
                kids={props.children}
                close={props.backdropClose}
                cart={props.cart}
                removed={props.removed}
                mobileClosed={props.closeMobile} /> : props.children}</div>
    )
}


export default Backdrop;