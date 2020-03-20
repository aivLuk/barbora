import React from 'react';
import styles from './Backdrop.module.css'
import Cart from '../../../containers/Cart/Cart';

const Backdrop = (props) => {
    return (
        <div>{props.active ? <Cart kids={props.children} close={props.backdropClose} cart={props.cart} removed={props.removed} /> : props.children}</div>
    )
}


export default Backdrop;