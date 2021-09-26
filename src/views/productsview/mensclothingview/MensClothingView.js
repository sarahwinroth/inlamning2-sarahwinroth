import React from 'react'
import { GetProducts } from '../../../components/getproducts/GetProducts'
import { useLocation } from 'react-router-dom'

export const MensClothingView = () => {
    const location = useLocation()

    return (
        <div className='container'>
            <GetProducts category="men's clothing"/>
            <p className="useHistory-value">{location.state}</p> 
        </div>
    )
}
