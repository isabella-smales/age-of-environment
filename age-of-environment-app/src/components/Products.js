import Product from './Product.js'

const Products = ({ products, homepage }) => {
    return (
        <div>
            { products.map(
              (product) => (<Product key={product.id} product={product} homepage={homepage} />)
            ) }
        </div>
    )
}

export default Products
