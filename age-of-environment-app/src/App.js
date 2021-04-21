import Header from './components/Header.js'
// import Footer from './components/Footer.js'
import Dropdown from './components/Dropdown.js'
import Products from './components/Products.js'
import Search from './components/Search.js'
import Homepage from './components/Homepage.js'
import { useState, useEffect } from 'react' 
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [products, setProducts] = useState([]) 
  const [searchedProducts, setSearchedProducts] = useState([])
  const [homepageProducts, setHomepageProducts] = useState([])

  useEffect(() => {
    fetch("/allproducts").then(res => res.json().then(data => {
      setProducts(data);
    }))
  }, [])

  // useEffect(() => {
  //   fetch("/api/search", {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(searchQuery)
  //   }).then(res => res.json().then(data => {
  //     setSearchedProducts(data);
  //   }))
  // }, [])

  const onSearch = async (searchQuery) => {
    try {
      const res = await fetch(`/api/search?name=${searchQuery.searchQuery}`)
      const data = await res.json()
      setSearchedProducts(data)
    } catch (e) {
      setSearchedProducts([])
    }
  }

  const onClickSearch = async () => {
    setSearchedProducts([])
  }

  useEffect(() => {
    const homepageItemSelector = async () => {
      const res = await fetch("/allproducts")
      const data = await res.json()
      let products = data    
            // fetch("/allproducts").then(res => res.json().then(data => {
            //   setProducts(data);
            // }))
      const data2 = []
      for (let id of [32,15,33]) {
        data2.push(products.filter((product) => product.id === id)[0])
      }
      const image_urls = ['https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1583786859-51U6SwmOML.jpg?crop=1xw:1.00xh;center,top&resize=768:*', 'https://img.huffingtonpost.com/asset/5dcc389d2500001105d2cfe2.jpeg?ops=scalefit_960_noupscale&format=webp', 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1583786380-1581714108-eco-friendly-products-zojirushi-stainless-steel-mug-1581714090.jpg?crop=1xw:1xh;center,top&resize=768:*']
      for (let i in image_urls) {
        data2[i]['image'] = image_urls[i]
      }
      setHomepageProducts(data2)
      console.log(data2)
    }
    homepageItemSelector()
  }, [])
  console.log(homepageProducts)
  
  //const home = await homepageItemSelector([15,19,23])

  // const setHomepageProductsFunc = async () => {
  //   const data = await homepageItemSelector([15,19,23])
  //   setHomepageProducts(data)
  // }

  return (
    
    <Router>
      <div className="App">
        <Header onDropdown={() => setShowDropdown(!showDropdown)}
        showDropdown = {showDropdown} onClickSearch={onClickSearch}/>
        {showDropdown && <Dropdown />}
        <Route path='/' exact>
          <Homepage data={homepageProducts} homepage={true}/>
        </Route>
        <Route path='/allproducts'>
          <Products products={products}  />
        </Route>
        <Route path='/login'/>
        <Route path='/search'>
          <Search onSearch={onSearch} />
          <Products products={searchedProducts} />
        </Route>
        {/* <Footer /> */}
        
      </div>
    </Router>
  );
}

export default App;
