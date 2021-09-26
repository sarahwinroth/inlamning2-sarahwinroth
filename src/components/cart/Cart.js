import { useContext } from 'react'
import { ItemsInCartContext } from '../../shared/provider/ItemsInCartProvider.js'
import "./Cart.css";

export const Cart = ({ isCartOpen, cartHandler }) => {
  const [itemsInCart, setItemsInCart, totalPrice] = useContext(ItemsInCartContext)

  const displayCart = () => {  
      console.log(totalPrice)
    return itemsInCart.map(item => 
        <div className='item'>   
            <p>{item?.title}</p>
            <p>{item?.price + ' :-'}</p> 
        </div>
    )
  }

  const totalPayment = () => {
    const sum = parseFloat(totalPrice).toFixed(2)
    return (
    <p>Total: {sum} :-</p>
    )
  }

  return (
    <div className={isCartOpen ? 'cart cart--open' : 'cart'}>
      <div className='cart-header'>
        <h4>Shopping cart</h4><button className='close-cart-btn' onClick={() => cartHandler(false)}>X</button>
      </div>
      <div className='items-in-cart'>
        {displayCart()}
      </div>
      <div className='total-payment'>
      {totalPayment()}
      </div>
    </div>
  )
}