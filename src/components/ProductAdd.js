import React from 'react'
import { Link } from 'react-router-dom'

const ProductAdd = () => {
  return (
    <div>
      <header className='d-flex flex-row justify-content-between align-items-center'>
        <h2 className='d-inline'>Product Add</h2>
        <div>
        <Link key={"list-products"} to={"/"} className="mx-1 btn btn-primary p-1">
        SAVE
        </Link>
        <button className='mx-1 btn btn-light p-1'>MASS DELETE</button>
        </div>
      </header>
      <hr />

      <form action='' className='container'>
        
        <div className='row text-left'>
          <label htmlFor='sku' className='col-3 my-2 text-start'>SKU</label>
          <input type='text' name='sku' id='sku' className='col-4 my-2 border form-control-sm' />
        </div>

        <div className='row'>
          <label htmlFor='name' className='col-3 my-2 text-start'>Name</label>
          <input type='text' name='name' id='name' className='col-4 my-2 border form-control-sm' />
        </div>

        <div className='row'>
          <label htmlFor='price' className='col-3 my-2 text-start'>Price ($)</label>
          <input type='number' name='price' id='price' className='col-4 my-2 border form-control-sm' />
        </div>

        <div className='row'>
          <label htmlFor='type-switcher' className='col-3 my-2 text-start'>Type Switcher</label>
          <select name='type-switcher' id='type-switcher' className='col-4 my-2 border form-control-sm'>
            <option value=''>Select type</option>
            <option value='DVD-disc'>DVD-disc</option>
            <option value='Book'>Book</option>
          </select>
        </div>

      </form>
    </div>
  )
}

export default ProductAdd