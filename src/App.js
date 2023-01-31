import './App.css';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ProductAdd from './components/ProductAdd';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAll } from './API';


function App() {
  const [products, setProducts] = useState([]);
  


 // get all products
  useEffect(() =>{
    getAll()
    .then((products) => setProducts(products))
  },[])
  
  const handleProducts = (skuList) => {
      setProducts(products.filter(item => skuList.includes(item.sku) === false ))
  }
  

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
              <ProductList products={[...products]} handleProducts={handleProducts} />
              
              <Footer />
            </div>
          </div>
        } />

        </Routes>
  );
}

export default App;
