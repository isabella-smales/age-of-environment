import Product from './Product.js'

const Products = ({ products }) => {
    return (
        <>
            { products.map(
              (product) => (<Product key={product.id} product={product}/>)
            ) }
        </>
    )
}

export default Products
