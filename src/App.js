import './App.css';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ProductAdd from './components/ProductAdd';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
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
              <ProductList />
              
              <Footer />
            </div>
          </div>
        } />

        </Routes>
  );
}

export default App;
