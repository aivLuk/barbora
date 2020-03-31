import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dairy from './containers/Dairy/Dairy';
import Bread from './containers/Bread/Bread';
import Vegetables from './containers/Vegetables/Vegetables';
import Fruits from './containers/Fruits/Fruits';
import Meat from './containers/Meat/Meat';
import Banner from './components/Banner/Banner';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Checkout from './containers/Checkout/Checkout';
import OrderHistory from './containers/OrderHistory/OrderHistory';
import MobileMenu from './components/MobileMenu/MobileMenu';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    cart: [],
    cartActive: false,
    hamburgerActive: false
  }

  dairyAdded = (products) => {
    this.productAddedHandler(products)
  }

  breadAdded = (products) => {
    this.productAddedHandler(products)
  }

  fruitsAdded = (products) => {
    this.productAddedHandler(products)
  }

  meatAdded = (products) => {
    this.productAddedHandler(products)
  }

  vegetablesAdded = (products) => {
    this.productAddedHandler(products)
  }

  productAddedHandler = (products) => {
    const updatedCart = [...this.state.cart]
    products.map(el => {
      if (el.quantity > 0) {
        updatedCart.push(el)
      }
    })
    const reducedCart = [];
    for (let i = 0; i < updatedCart.length; i++) {
      if (reducedCart.indexOf(updatedCart[i]) === -1) {
        reducedCart.push(updatedCart[i])
      }
    }
    this.setState({ cart: reducedCart })
  }

  cartClicked = () => {
    this.setState({ cartActive: true })
  }

  backdropClose = () => {
    this.setState({ cartActive: false })
  }

  cartProductRemoved = (index) => {
    const cartUpdated = [...this.state.cart];
    cartUpdated.splice(index, 1);
    this.setState({ cart: cartUpdated })
  }

  hamburgerToggle = () => {
    this.setState({ hamburgerActive: !this.state.hamburgerActive })
  }

  hamburgerClosed = () => {
    this.setState({ hamburgerActive: false })
  }

  render() {
    return (
      <Backdrop
        active={this.state.cartActive}
        backdropClose={this.backdropClose}
        cart={this.state.cart}
        removed={this.cartProductRemoved}
        closeMobile={this.hamburgerClosed}>
        <div className="App">
          <Header
            cartClicked={this.cartClicked}
            cartLength={this.state.cart.length}
            hamburgerClicked={this.hamburgerToggle} />
          <MobileMenu
            active={this.state.hamburgerActive}
            cartClicked={this.cartClicked}
            cartLength={this.state.cart.length}
            menuItemClicked={this.hamburgerToggle}>
            <Sidebar />
            <Switch>
              <Route path="/" exact component={Banner} />
              <Route path="/dairy" render={() => {
                return <Dairy added={this.dairyAdded} />
              }} />
              <Route path="/bread" render={() => {
                return <Bread added={this.breadAdded} />
              }} />
              <Route path="/vegetables" render={() => {
                return <Vegetables added={this.vegetablesAdded} />
              }} />
              <Route path="/fruits" render={() => {
                return <Fruits added={this.fruitsAdded} />
              }} />
              <Route path="/meat" render={() => {
                return <Meat added={this.meatAdded} />
              }} />
              <Route path="/checkout" render={() => {
                return <Checkout order={this.state.cart} />
              }} />
              <Route path="/order-history" component={OrderHistory} />
              <Route component={Banner} />
            </Switch>
          </MobileMenu>
        </div>
      </Backdrop>
    );
  }

}

export default App;
