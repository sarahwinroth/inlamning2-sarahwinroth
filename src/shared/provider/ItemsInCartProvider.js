import { createContext, useState, useEffect } from 'react'

export const ItemsInCartContext = createContext()

export const ItemsInCartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=> {
    itemsInCart.map(item =>
      setTotalPrice(totalPrice + item.price)
    )
  }, [itemsInCart])

  return (
    <ItemsInCartContext.Provider value={[itemsInCart, setItemsInCart, totalPrice]}>
      {children}
    </ItemsInCartContext.Provider>
  );
};