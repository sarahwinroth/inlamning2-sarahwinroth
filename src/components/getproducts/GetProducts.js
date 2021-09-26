import React, { useState, useEffect, useContext } from 'react'
import ProductsAPIService from '../../shared/api/service/ProductsAPIService'
import { ItemsInCartContext } from '../../shared/provider/ItemsInCartProvider'
import { Loader } from '../loader/Loader'
import './GetProducts.css'

export const GetProducts = ({ category }) => {
    const [products, setProducts] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [itemsInCart, setItemsInCart] = useContext(ItemsInCartContext)

    const fetchProducts = async () => {
        const response = await ProductsAPIService.category({category})
        setProducts(response.data)
        setIsLoaded(true)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <h2>{category?.toUpperCase()}</h2>
            { isLoaded ? (
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
