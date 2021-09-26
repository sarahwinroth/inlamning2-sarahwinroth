import React, {useState, createContext} from 'react'
import ProductsAPIService from '../../shared/api/service/ProductsAPIService'

export const ProductsContext = createContext(null)

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    const fetchProducts = async () => {
        const response = await ProductsAPIService.allProducts()
        setProducts(response.data)
        setIsLoaded(true)
    }

    return (
        <ProductsContext.Provider value={{products, fetchProducts, isLoaded}}>
            {children}
        </ProductsContext.Provider>
    )
}