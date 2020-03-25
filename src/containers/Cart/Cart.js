import React, { Component } from 'react';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

class Cart extends Component {

    render() {
        let totalPrice = 0;
        const cartProducts = this.props.cart.map((el, i) => {
            totalPrice += el.price * el.quantity;
            return (
                <div key={el.name} className={styles.CartProduct}>
                    <img src={el.url} />
                    <p className={styles.CartName}>{el.name}</p>
                    <p className={styles.CartQuantity}>x{el.quantity % 1 === 0 ? el.quantity : el.quantity.toFixed(1)}</p>
                    <p className={styles.CartPrice}>{(el.price * el.quantity).toFixed(2)} €</p>
                    <span className={styles.DeleteProduct} onClick={() => this.props.removed(i)}>x</span>
                </div>
            )
        })

        let cartUpdate = <h2>Your Cart Is Empty...</h2>
        if (this.props.cart.length > 0) {
            cartUpdate = (
                <div className={styles.Contain}>
                    <h2>Order Summary</h2>
                    <span className={styles.CloseModal} onClick={this.props.close}>X</span>
                    <div className={styles.CartProductsContainer}>
                        {cartProducts}
                    </div>
                    <p>Total Price: <span style={{ fontWeight: 'bold' }}>{totalPrice.toFixed(2)} €</span></p>
                    <Link to="/checkout" onClick={this.props.close} className={styles.CartContinue}>CONTINUE TO CHECKOUT > </Link>
                </div>
            )
        }


        return (
            <div className={styles.CartContainer}>
                <div className={styles.Backdrop} onClick={this.props.close}></div>
                <div className={styles.Modal}>
                    {cartUpdate}
                </div>
                {this.props.kids}
            </div>
        )
    }
}
export default Cart;