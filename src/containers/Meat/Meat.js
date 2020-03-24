import React, { Component } from 'react';
import styles from './Meat.module.css';

class Meat extends Component {
    state = {
        meat: [
            { name: 'Beef', quantity: 0, url: 'https://embed.widencdn.net/img/beef/w9kdtqjlhb/exact/Stew%20Meat_1.psd?keep=c&u=7fueml', price: 4.9 },
            { name: 'Chicken', quantity: 0, url: 'https://pngimage.net/wp-content/uploads/2018/05/broiler-chicken-meat-png.png', price: 4.1 },
            { name: 'Pork', quantity: 0, url: 'https://www.pork.org/wp-content/uploads/2017/10/raw-pork-blade-steak-TOPIC.jpg', price: 3.2 }
        ]
    }

    productAdded = (name) => {
        let stateArr = [...this.state.meat]
        stateArr.map((el, i) => {
            if (el.name === name) {
                stateArr[i].quantity += 0.1;
                this.setState({ meat: stateArr })
            }
        })
    }
    productRemoved = (name) => {
        let stateArr = [...this.state.meat]
        stateArr.map((el, i) => {
            if (el.name === name && el.quantity > 0) {
                stateArr[i].quantity = +((el.quantity - 0.1).toFixed(1));
                this.setState({ meat: stateArr })
            }
        })
    }

    render() {
        return (
            <div className={styles.ProductContainer}>
                {this.state.meat.map(element => {
                    return (
                        <div className={styles.Meat} key={element.name}>
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
                            <button className={styles.AddToCart} onClick={() => this.props.added(this.state.meat)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Meat;