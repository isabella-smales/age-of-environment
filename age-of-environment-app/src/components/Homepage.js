import Products from './Products.js'

const Homepage = ({ data, homepage }) => {
    return (
        <div>
            <h2 className='banner'>Welcome to the Age of Environment</h2>
            <h3 className='description'> 
            We are facing a significant climate crisis. It is up to us to shop responsibly and buy with our conscience in mind.<br/><br/> Our mission statement is to help people buy responsibly and protect the planet.<br/><br/> Our website provides eco-friendly alternatives for a range of everyday products.
            </h3>
            <div>
                <Products products={data} homepage={homepage}/>
            </div>
        </div>
    )
}

export default Homepage
