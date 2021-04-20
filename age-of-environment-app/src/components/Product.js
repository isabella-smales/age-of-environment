const Product = ({ product }) => {
    return (
        <div className='product'>
            <h3 className='h3'>{product.name}</h3>
            <h4 className='h4'>£{product.price}</h4>
            <h4>{product.product_des}</h4>
        </div>
    )
}

export default Product
