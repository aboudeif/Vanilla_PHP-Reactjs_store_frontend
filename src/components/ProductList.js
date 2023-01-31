import React from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { remove } from '../API'

const ProductList = ({ products, handleProducts }) => {

  let deleteList = [];

  const handleDelete = (status, sku) => {
    console.log(sku,' ',status)
    
    if(status) {
      deleteList  = [...deleteList, sku]
    } else {
      deleteList = deleteList.filter(item => item !== sku)
    }
    console.log('deleteList: ', deleteList)
  }

  const handleDeleteExecution = () => {

    handleProducts(deleteList)
    remove(deleteList)
    .then(deleteList = [])
    }

  return (
    <div>
      <header className='d-flex flex-row justify-content-between align-items-center'>
        <h2 className='d-inline'>Product List</h2>
        <div>
        <Link key={"add-products"} to={"/add-product"} className="mx-1 btn btn-light p-1">
        ADD
        </Link>
        <button className='mx-1 btn btn-danger p-1 delete-checkbox' id='delete-product-btn' onClick={handleDeleteExecution}>MASS DELETE</button>
        </div>
      </header>
      <hr />
      <main className='d-flex flex-row justify-content-start align-items-center flex-wrap'>
      
      {products?.length > 0 ?
        products.map(product => 
          <Product key={product.sku} { ...product } handleDelete={handleDelete} />
        )
       : 
        <div>
      
        </div>
      }
      </main>
    </div>
  )
}

export default ProductList