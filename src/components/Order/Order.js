import React from 'react';
import styles from './Order.module.css';

const Order = (props) => {
    let products = null;

    if (props.products) {
        products = props.products.map(product => {
            return (
                <div className={styles.ProductsContainer}>
                    <img src={product.url} />
                    <p className={styles.ProductName}>{product.name}</p>
                    <p className={styles.ProductQuantity}>Amount: {product.quantity % 1 === 0 ? product.quantity : product.quantity.toFixed(1)}</p>
                    <p className={styles.ProductPrice}>Price: {(product.quantity * product.price).toFixed(2)} €</p>
                </div>
            )
        })
    }


    console.log(props.products)
    return (
        <div className={styles.OrderContainer}>
            <p className={styles.OrderID}><strong>Order number:</strong> {props.orderID}</p>
            <div className={styles.ContactsContainer}>
                <p><strong>Name:</strong> {props.contacts.name}</p>
                <p><strong>Address:</strong> {props.contacts.address}</p>
                <p><strong>ZIP:</strong> {props.contacts.zipCode}</p>
                <p><strong>Delivery method:</strong> {props.contacts.delivery}</p>
                {props.contacts.comments.length > 0 ? <p><strong>Comments:</strong> {props.contacts.comments}</p> : null}
            </div>
            {products}
        </div>
    )
}

export default Order;