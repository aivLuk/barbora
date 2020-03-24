import React, { Component } from 'react';
import styles from './Vegetables.module.css';

class Vegetables extends Component {
    state = {
        vegetables: [
            { name: 'Tomatoes', quantity: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/1200px-Bright_red_tomato_and_cross_section02.jpg', price: 1.5 },
            { name: 'Potatoes', quantity: 0, url: 'https://mabaexports.com/wp-content/uploads/2018/09/Potato.jpg', price: 0.6 },
            { name: 'Cucumbers', quantity: 0, url: 'https://www.greefa.com/wp-content/uploads/2016/05/web750px_0006_komkommer.png', price: 1.3 },
            { name: 'Onions', quantity: 0, url: 'https://ripeme.com/wp-content/uploads/RV-10050-RIPE-ORGANIC-ORGANIC-ONION-RED.jpg', price: 0.8 }
        ]
    }

    productAdded = (name) => {
        let stateArr = [...this.state.vegetables]
        stateArr.map((el, i) => {
            if (el.name === name) {
                stateArr[i].quantity += 0.1
                this.setState({ vegetables: stateArr })
            }
        })
    }
    productRemoved = (name) => {
        let stateArr = [...this.state.vegetables]
        stateArr.map((el, i) => {
            if (el.name === name && el.quantity > 0) {
                stateArr[i].quantity = +((el.quantity - 0.1).toFixed(1));
                this.setState({ vegetables: stateArr })
            }
        })
    }

    render() {
        return (
            <div className={styles.ProductContainer}>
                {this.state.vegetables.map(element => {
                    return (
                        <div className={styles.Vegetables} key={element.name}>
                            <img src={element.url} />
                            <p>{element.name}</p>
                            <span>€{element.price}/kg</span>
                            <button
                                className={element.quantity > 0 ? styles.Minus : styles.Disabled}
                                onClick={() => this.productRemoved(element.name)}>-</button>
                            <button
                                className={styles.Plus}
                                onClick={() => this.productAdded(element.name)}>+</button>
                            <input value={element.quantity} />
                            <label> / kg</label>
                            <button className={styles.AddToCart} onClick={() => this.props.added(this.state.vegetables)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Vegetables;