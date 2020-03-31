import React from 'react';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    let totalPrice = 0;
    const cartProducts = props.cart.map((el, i) => {
        totalPrice += el.price * el.quantity;
        return (
            <div key={el.name} className={styles.CartProduct}>
                <img src={el.url} />
                <p className={styles.CartName}>{el.name}</p>
                <p className={styles.CartQuantity}>x{el.quantity % 1 === 0 ? el.quantity : el.quantity.toFixed(1)}</p>
                <p className={styles.CartPrice}>{(el.price * el.quantity).toFixed(2)} €</p>
                <span className={styles.DeleteProduct} onClick={() => props.removed(i)}>x</span>
            </div>
        )
    })

    const checkout = () => {
        props.close();
        props.mobileClosed();
        return;
    }

    let cartUpdate = <h2>Your Cart Is Empty...</h2>
    if (props.cart.length > 0) {
        cartUpdate = (
            <div className={styles.Contain}>
                <h2>Order Summary</h2>
                <span
                    className={styles.CloseModal}
                    onClick={props.close}>X</span>
                <div className={styles.CartProductsContainer}>
                    {cartProducts}
                </div>
                <p>Total Price: <span
                    style={{ fontWeight: 'bold' }}>{totalPrice.toFixed(2)} €</span></p>
                <Link to="/checkout"
                    onClick={checkout}
                    className={styles.CartContinue}>CONTINUE TO CHECKOUT > </Link>
            </div>
        )
    }


    return (
        <div className={styles.CartContainer}>
            <div className={styles.Backdrop} onClick={props.close}></div>
            <div className={styles.Modal}>
                {cartUpdate}
            </div>
            {props.kids}
        </div>
    )
}

export default Cart;