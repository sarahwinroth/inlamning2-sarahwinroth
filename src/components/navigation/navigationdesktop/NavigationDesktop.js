import React, { useState } from 'react'
import { useHistory } from 'react-router'
import RoutingPath from '../../../routes/RoutingPath'
import logoImage from '../../../shared/img/logo.jpg'
import shoppingCart from '../../../shared/img/cart.jpg'
import { Cart } from '../../cart/Cart'
import './NavigationDesktop.css'

export const NavigationDesktop = () => {
    const history = useHistory();
    const smiley = ';)'
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
    <nav className="navbar-desktop">
      <div className="logo">
        <img src={logoImage} alt="A cool panda" />
        <span className="logo-text">PANDA FORCE</span>
      </div>
      <ul className="navlinks">
        <li>
          <span onClick={() => history.push(RoutingPath.womensClothingView, `Here is your useHistory value ${smiley}`)}>
            Women's clothing
          </span>
        </li>
        <li>
          <span onClick={() => history.push(RoutingPath.mensClothingView, `Here is your useHistory value ${smiley}`)}>
            Men's clothing
          </span>
        </li>
        <li>
          <span onClick={() => history.push(RoutingPath.jeweleryView, `Here is your useHistory value ${smiley}`)}>
            Jewelery
          </span>
        </li>
        <li>
          <span onClick={() => history.push(RoutingPath.electronicsView, `Here is your useHistory value ${smiley}`)}>
            Electronics
          </span>
        </li>
        <li>
          <span onClick={() => history.push(RoutingPath.allProductsView, `Here is your useHistory value ${smiley}`)}>
            All products
          </span>
        </li>
      </ul>
      <button className='cart-btn' onClick={() => setIsCartOpen(true)}>
        <img img src={shoppingCart} alt="Cart" />
      </button>
      <Cart isCartOpen={isCartOpen} cartHandler={setIsCartOpen} />
    </nav>
    )
}

