import Product from './Product.js'

const Products = ({ products, homepage }) => {
    return (
        <div className={`${homepage ? 'container' : ''}` }>
            { products.map(
              (product) => (<Product key={product.id} product={product} homepage={homepage} />)
            ) }
        </div>
    )
}

export default Products
