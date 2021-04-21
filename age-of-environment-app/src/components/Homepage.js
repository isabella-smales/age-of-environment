import Products from './Products.js'

const Homepage = ({ data, homepage }) => {
    return (
        <div>
           <h2 className='banner'>Welcome to the Age of Environment</h2>
           <h3 className='Description'> 
            As you all know, we are facing a significant climate crisis. With the planet getting into a worse and worse state, it is up to us to shop responsibly and buy with our conscious in mind. Our mission statement was to help people buy responsibly and protect the planet. By using our website you will find plenty of products that you can substitute for a more eco-friendly alternative. Use our search function to find something specific or if you don’t know what you may want then our all products tag to find and explore.
            </h3> 
           <div>
               <Products products={data} homepage={homepage}/>
           </div>
        </div>
    )
}

export default Homepage
