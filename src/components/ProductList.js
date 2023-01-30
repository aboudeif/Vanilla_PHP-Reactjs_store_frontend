import React from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const ProductList = ({ products }) => {

  return (
    <div>
      <header className='d-flex flex-row justify-content-between align-items-center'>
        <h2 className='d-inline'>Product List</h2>
        <div>
        <Link key={"add-products"} to={"/add-product"} className="mx-1 btn btn-light p-1">
        ADD
        </Link>
        <button className='mx-1 btn btn-danger p-1' id='delete-product-btn'>MASS DELETE</button>
        </div>
      </header>
      <hr />
      <main className='d-flex flex-row justify-content-start align-items-center flex-wrap'>
      
      {products?.length > 0 ?
        products.map(product => 
          <Product key={product.sku} { ...product } />
        )
       : 
        <div>
          {/* <Product { ...Product } /> */}
        </div>
      }
      </main>
    </div>
  )
}

export default ProductList