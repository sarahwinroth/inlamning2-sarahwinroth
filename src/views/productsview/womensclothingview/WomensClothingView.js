import React from 'react'
import { GetProducts } from '../../../components/getproducts/GetProducts'
import { useLocation } from 'react-router-dom'

export const WomensClothingView = () => {
    const location = useLocation()

    return (
        <div className='container'>
            <GetProducts category="women's clothing"/>
            <p className="useHistory-value">{location.state}</p> 
        </div>
    )
}
