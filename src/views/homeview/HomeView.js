
import React from 'react'
import { useLocation } from 'react-router-dom'
import { GetAllProducts } from '../../components/getallproducts/GetAllProducts'

export const HomeView = () => {
    const location = useLocation()

    return (
        <div className='container'>
            <GetAllProducts />
            <p className="useHistory-value">{location.state}</p> 
        </div>
    )
}