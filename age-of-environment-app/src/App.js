import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Dropdown from './components/Dropdown.js'
import Products from './components/Products.js'
import Search from './components/Search.js'
import { useState, useEffect } from 'react' 
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [products, setProducts] = useState([]) //unused at the moment
  const [searchedProducts, setSearchedProducts] = useState([])

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
    console.log(searchQuery.searchQuery)
    const res = await fetch(`/api/search?name=${searchQuery.searchQuery}`)
    const data = await res.json()
    setSearchedProducts(data)
  }
  console.log(products)
  console.log(searchedProducts)
  return (
    
    <Router>
      <div className="App">
        <Header onDropdown={() => setShowDropdown(!showDropdown)} 
        showDropdown = {showDropdown}/>
        {showDropdown && <Dropdown />}
        <Route path='/' exact render={(props) => (
        <>
        
        </>
      )} />
        <Route path='/allproducts' >
          <Products products={products}  />
        </Route>
        <Route path='/login'/>
        <Route path='/search'>
          <Search onSearch={onSearch} />
          <Products products={searchedProducts} />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
