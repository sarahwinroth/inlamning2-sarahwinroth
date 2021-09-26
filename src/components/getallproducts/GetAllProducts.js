import React, { useEffect, useContext } from 'react'
import { ProductsContext } from '../../shared/provider/ProductsProvider'
import { ItemsInCartContext } from '../../shared/provider/ItemsInCartProvider'
import { Loader } from '../loader/Loader'

export const GetAllProducts = () => {
    const {products, fetchProducts, isLoaded} = useContext(ProductsContext)
    const [itemsInCart, setItemsInCart] = useContext(ItemsInCartContext)

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <h2>All products</h2>
            {isLoaded ? (
                <div className='products-wrapper'>
                {products?.map(product => {
                    return (
                    <div className='product'>
                        <img src={product?.image} alt={product?.title} />
                        <div className='product-info'>
                            <h4 className='product-title'>{product?.title}</h4>
                            <div className='purchase'>  
                                <h4 className='product-price'>{product?.price} :-</h4>
                                <button className='purchase-btn' onClick={() => setItemsInCart([...itemsInCart, product])}>Buy</button>
                            </div>
                        </div>
                    </div>
                    )
                })} 
                </div>      
            ) : (<Loader />)}  
        </> 
    )
}
