const Product = ({ product, homepage }) => {
    return (
        <div className={`product ${homepage ? 'homepageItem' : ''}` }>
            { product.image && <img src={`${product.image}`} alt="Product"  /> }
            <h3 className='h3'>{product.name}</h3>
            <h4 className='h4'>£{product.price}</h4>
            <h4>{product.product_des}</h4>
        </div>
    )
}

export default Product
