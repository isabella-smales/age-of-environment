const Product = ({ product, homepage }) => {
    return (
        <div className={`product ${homepage ? 'homepageItemCard' : 'productItem'}` }>
            { product.image && <img src={`${product.image}`} alt="Product"  /> }
            <div className={`product ${homepage ? 'homepageCard' : ''}` }>
                <h3 className='product_name'>{product.name}</h3>
                <h4 className='product_price'>£{product.price}</h4>
                <h4 className='product_des'>{product.product_des}</h4>
            </div>
        </div>
    )
}

export default Product
