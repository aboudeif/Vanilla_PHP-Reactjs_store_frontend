import './App.css';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ProductAdd from './components/ProductAdd';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAll } from './API';


function App() {
  const [products, setProducts] = useState([{
    "sku": "dhs",
    "name": "dddf",
    "price": "12.50",
    "type": "DVD",
    "size": "700",
    "weight": null,
    "hieght": null,
    "width": null,
    "length": null
  },
  {
    "sku": "ssd-ffg-hhj",
    "name": "new DVD rrt",
    "price": "18.50",
    "type": "DVD",
    "size": "900",
    "weight": null,
    "hieght": null,
    "width": null,
    "length": null
  }]);

 // get all books in shelves
  useEffect(() =>{
    getAll()
    .then((products) => setProducts(Array.isArray(products) ? products : [].push(products)))
  })
  
  // useEffect(() => {
  //   fetch("http://localhost:8080/php-test")
  //   .then(response => response.json())
  //   .then(data => setProducts(data.total));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  return (

    
      <Routes>
      {/* Add Product Page */}
      <Route
        path="/add-product"
        element={
          <div className='m-5'>
            <div className='m-5 d-flex flex-column justify-content-between' style={{height: 'calc(90vh)'}}>
              <ProductAdd />
              <Footer />
            </div>
          </div>
        } />
      {/* List Products Page */}
      <Route
        path="/"
        element={
          <div className='m-5'>
            <div className='m-5 d-flex flex-column justify-content-between' style={{height: 'calc(90vh)'}}>
              <ProductList products={[...products]} />
              
              <Footer />
            </div>
          </div>
        } />

        </Routes>
  );
}

export default App;
