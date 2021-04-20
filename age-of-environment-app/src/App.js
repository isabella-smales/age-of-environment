import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Dropdown from './components/Dropdown.js'
import Products from './components/Products.js'
import { useState, useEffect } from 'react' 
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [products, setProducts] = useState([]) //unused at the moment

  useEffect(() => {
    fetch("/allproducts").then(res => res.json().then(data => {
      setProducts(data);
    }))

    // const getProducts = async () => {
    //   const productsFromServer = await fetchProducts()
    //   setProducts(productsFromServer)
    // }
    // getProducts()
  }, [])

  // Get All Products
  // const fetchProducts = async () => {
  //   const res = await fetch('http://127.0.0.1:5000/allproducts', {
  //   mode: 'no-cors',
  //   method: 'GET',
  //   headers: {'Content-type': 'application/json'}
  //   })
  //   const data = await res.json()

  //   return data
  // }

//   fetch('http://localhost:5000/allproducts', {
//             mode: 'no-cors',
//             method: "post",
//             headers: {
//                  "Content-Type": "application/json"
//             },
//             body: JSON.stringify(ob)
//  })

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
