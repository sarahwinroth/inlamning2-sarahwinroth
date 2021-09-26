import React from 'react'
import { useLocation } from 'react-router-dom'
import { GetAllProductsFromContext } from '../../../components/getallproducts/GetAllProductsFromContext'

export const AllProductsView = () => {
    const location = useLocation()

    return (
        <div className='container'>
            <GetAllProductsFromContext />
            <p className="useHistory-value">{location.state}</p> 
        </div>
    )
}
