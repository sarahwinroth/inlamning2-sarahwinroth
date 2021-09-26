import axios from 'axios'

const ProductsAPI = axios.create({
        baseURL: 'https://fakestoreapi.com/'
    })

export default ProductsAPI