import React, { Component } from 'react';
import axios from 'axios';
import Order from '../../components/Order/Order';
import styles from './OrderHistory.module.css';

class OrderHistory extends Component {
    state = {
        orders: null
    }

    componentDidMount() {
        axios.get('https://react-my-burger-48405.firebaseio.com/barbora.json')
            .then(response => {
                this.setState({ orders: response.data })
            })
            .catch(err => {
                alert('Oops... Something went wrong!')
            })
    }

    render() {
        let ordersArr = [];
        let orders = null;

        if (this.state.orders) {
            for (let id in this.state.orders) {
                ordersArr.push({
                    orderID: id,
                    config: this.state.orders[id]
                })
            }

            orders = ordersArr.map(el => {
                return (
                    <Order
                        key={el.orderID}
                        orderID={el.orderID}
                        contacts={el.config.contact}
                        products={el.config.products} />
                )
            })
        }

        console.log(this.state.orders)
        return (
            <div className={styles.OrderHistory}>
                <h1>Your order history</h1>
                {orders}
            </div>
        )
    }
}

export default OrderHistory;