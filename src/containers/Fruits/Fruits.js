import React, { Component } from 'react';
import styles from './Fruits.module.css';

class Fruits extends Component {
    state = {
        fruits: [
            { name: 'Bananas', quantity: 0, url: 'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SL1500_.jpg', price: 1.6 },
            { name: 'Oranges', quantity: 0, url: 'https://ripeme.com/wp-content/uploads/RF-10046-RIPE-ORGANIC-ORGANIC-ORANGES.jpg', price: 1.8 },
            { name: 'Apples', quantity: 0, url: 'https://4.imimg.com/data4/IN/YV/ANDROID-35538930/product-250x250.jpeg', price: 1.2 },
            { name: 'Peaches', quantity: 0, url: 'https://bloximages.chicago2.vip.townnews.com/parkerpioneer.net/content/tncms/assets/v3/editorial/1/3b/13bbaa54-f4fc-11e9-a018-df3be4ff90a8/5daf4e85925a8.image.jpg?resize=400%2C309', price: 2.3 }
        ]
    }

    productAdded = (name) => {
        let stateArr = [...this.state.fruits]
        stateArr.map((el, i) => {
            if (el.name === name) {
                stateArr[i].quantity += 0.1
                this.setState({ fruits: stateArr })
            }
        })
    }
    productRemoved = (name) => {
        let stateArr = [...this.state.fruits]
        stateArr.map((el, i) => {
            if (el.name === name && el.quantity > 0) {
                stateArr[i].quantity = +((el.quantity - 0.1).toFixed(1));
                this.setState({ fruits: stateArr })
            }
        })
    }

    render() {
        return (
            <div className={styles.ProductContainer}>
                {this.state.fruits.map(element => {
                    return (
                        <div className={styles.Fruits} key={element.name}>
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
                            <button
                                className={styles.AddToCart}
                                onClick={() => this.props.added(this.state.fruits)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Fruits;