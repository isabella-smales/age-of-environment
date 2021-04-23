import Header from './components/Header.js'
import Dropdown from './components/Dropdown.js'
import Products from './components/Products.js'
import Search from './components/Search.js'
import Homepage from './components/Homepage.js'
import { useState, useEffect } from 'react' 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DropdownSelect from './components/DropdownSelect.js'

function App() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [products, setProducts] = useState([]) 
  const [searchedProducts, setSearchedProducts] = useState([])
  const [homepageProducts, setHomepageProducts] = useState([])
  const [dropdownProducts, setDropdownProducts] = useState([])

  useEffect(() => {
    fetch("/allproducts").then(res => res.json().then(data => {
      setProducts(data);
    }))
  }, [])

  useEffect(() => {
    const homepageItemSelector = async () => {
      const res = await fetch("/allproducts")
      const data = await res.json()
      let products = data
      const fetchedHomepageProducts = []
      for (let id of [32,15,33]) {
        fetchedHomepageProducts.push(products.filter((product) => product.id === id)[0])
      }
      const image_urls = ['https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1583786859-51U6SwmOML.jpg?crop=1xw:1.00xh;center,top&resize=768:*', 'https://img.huffingtonpost.com/asset/5dcc389d2500001105d2cfe2.jpeg?ops=scalefit_960_noupscale&format=webp', 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1583786380-1581714108-eco-friendly-products-zojirushi-stainless-steel-mug-1581714090.jpg?crop=1xw:1xh;center,top&resize=768:*']
      for (let i in image_urls) {
        fetchedHomepageProducts[i]['image'] = image_urls[i]
      }
      setHomepageProducts(fetchedHomepageProducts)
    }
    homepageItemSelector()
  }, [])

  const onSearch = async (searchQuery) => {
    try {
      const res = await fetch(`/api/search?name=${searchQuery.searchQuery}`)
      const data = await res.json()
      setSearchedProducts(data)
    } catch (e) {
      setSearchedProducts([])
    }
  }

  const onSelectDropdown = async (dropdownSelection) => {
    try {
      const res = await fetch(`/api/product?category_id=${dropdownSelection}`)
      const data = await res.json()
      setDropdownProducts(data)
    } catch (e) {
      setDropdownProducts([])
    }
  }

  const onClickSearch = () => {
    setSearchedProducts([])
  }

  const onClickSearchByCat = () => {
    setDropdownProducts([])
  }

  return (
    <Router>
      <div className="App">
        <Header onDropdown={() => setShowDropdown(!showDropdown)}
        showDropdown = {showDropdown} />
        {showDropdown && <Dropdown onClickSearchByCat={onClickSearchByCat} onClickSearch={onClickSearch} />}
        <Route path='/' exact>
          <Homepage data={homepageProducts} homepage={true} />
        </Route>
        <Route path='/allproducts'>
          <Products products={products} />
        </Route>
        <Route path='/search'>
          <Search onSearch={onSearch} />
          <Products products={searchedProducts} />
        </Route>
        <Route path='/search_by_category'>
          <DropdownSelect onSelectDropdown={onSelectDropdown} />
          <Products products={dropdownProducts} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
