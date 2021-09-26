import React from 'react'
import { GetProducts } from '../../../components/getproducts/GetProducts'
import { useLocation } from 'react-router-dom'

export const ElectronicsView = () => {
    const location = useLocation()

    return (
        <div className='container'>
            <GetProducts category="electronics"/>
            <p className="useHistory-value">{location.state}</p> 
        </div>
    )
}
