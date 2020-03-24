import React, { Component } from 'react';
import styles from './Bread.module.css';

class Bread extends Component {
    state = {
        bread: [
            { name: 'Organic Bread', quantity: 0, url: 'https://static.turbosquid.com/Preview/2019/05/11__23_11_25/BreadPackage3dmodel8.jpg8C5A7F50-CCA7-445D-BEFD-2343DA969918DefaultHQ.jpg', price: 2.2 },
            { name: 'Whole Wheat', quantity: 0, url: 'https://i.pinimg.com/236x/78/dd/6b/78dd6bb3e74179b4df422ec514bce1d0--plastic-packaging-food-packaging.jpg', price: 1.2 },
            { name: 'Milk Bread', quantity: 0, url: 'https://lh3.googleusercontent.com/proxy/QJsD16x41HTPwrd-VzyJlhsXuJaTHHKuNB08StXJ2Kbil881cvEofUGxQpwW0v5N71DGcoHsIiKai_tQc4mGRUcgmMgXz0UtBFtTbobLgb3sepsodvtePW95xabhieP5', price: 1.6 },
            { name: 'Toasted Bread', quantity: 0, url: 'https://image.made-in-china.com/202f0j00uiqfGclUIYoV/Toast-Bread-Package-Kraft-Paper-Bag.jpg', price: 1.8 }
        ]
    }

    productAdded = (name) => {
        let stateArr = [...this.state.bread]
        stateArr.map((el, i) => {
            if (el.name === name) {
                stateArr[i].quantity = el.quantity + 1;
                this.setState({ bread: stateArr })
            }
        })
    }
    productRemoved = (name) => {
        let stateArr = [...this.state.bread]
        stateArr.map((el, i) => {
            if (el.name === name && el.quantity > 0) {
                stateArr[i].quantity = el.quantity - 1;
                this.setState({ bread: stateArr })
            }
        })
    }

    render() {
        return (
            <div className={styles.ProductContainer}>
                {this.state.bread.map(element => {
                    return (
                        <div className={styles.Bread} key={element.name}>
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
                            <button className={styles.AddToCart} onClick={() => this.props.added(this.state.bread)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Bread;