import React, { Component } from 'react';
import styles from './Dairy.module.css';

class Dairy extends Component {
    state = {
        dairy: [
            { name: 'Milk', quantity: 0, url: 'https://brownesdairy.com.au/wp-content/uploads/2019/02/full_cream_milk_s-247x300.png', price: 0.9 },
            { name: 'Yogurt', quantity: 0, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuGy3mbYb7cq0Y6P0Amva5Z87ZMtvj725urScE6JwcriEBqiER', price: 1.1 },
            { name: 'Cheese', quantity: 0, url: 'https://www.ellsworthcheese.com/wp-content/uploads/2019/11/ECC-Gift-Box-Catalog-09-19-1-670x1030.png', price: 1.9 }
        ]
    }

    productAdded = (name) => {
        let stateArr = [...this.state.dairy]
        stateArr.map((el, i) => {
            if (el.name === name) {
                stateArr[i].quantity = el.quantity + 1;
                this.setState({ dairy: stateArr })
            }
        })
    }
    productRemoved = (name) => {
        let stateArr = [...this.state.dairy]
        stateArr.map((el, i) => {
            if (el.name === name && el.quantity > 0) {
                stateArr[i].quantity = el.quantity - 1;
                this.setState({ dairy: stateArr })
            }
        })
    }

    render() {
        return (
            <div className={styles.ProductContainer}>
                {this.state.dairy.map(element => {
                    return (
                        <div className={styles.Main} key={element.name}>
                            <img src={element.url} />
                            <p>{element.name}</p>
                            <span>€{element.price}/unit</span>
                            <button
                                className={element.quantity > 0 ? styles.Minus : styles.Disabled}
                                onClick={() => this.productRemoved(element.name)}>-</button>
                            <button
                                className={styles.Plus}
                                onClick={() => this.productAdded(element.name)}>+</button>
                            <input value={element.quantity} />
                            <label> / units</label>
                            <button
                                className={styles.AddToCart}
                                onClick={() => this.props.added(this.state.dairy)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Dairy;