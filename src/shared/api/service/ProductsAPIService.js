import http from '../ProductsAPI'

const allProducts = () => {
    return http.get('products')
}

const category = ({ category }) => {
    return http.get(`products/category/${category}`)
}

export default { allProducts, category }