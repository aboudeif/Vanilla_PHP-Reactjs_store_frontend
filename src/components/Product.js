import React from "react";

const Product = ({ sku, name, price, type, handleDelete }) => {
const handleInput = (e) => handleDelete(e.target.checked, sku)

  return (
    
    <span className="border border-dark-700 rounded p-3 m-2 small col-2">
      <div className="d-flex">
        <div className="w-100">
        <div className="">
          <input type="checkbox" className="form-check-input delete-checkbox" onInput={handleInput}/>
        </div>
        <div className="m-3 text-center mx-auto">
          {sku}
          <br />
          {name}
          <br />
          {price}
          <br />
          {type}
        </div>
        
      </div>
      </div>
    </span>
    
  );
  
};

export default Product;
