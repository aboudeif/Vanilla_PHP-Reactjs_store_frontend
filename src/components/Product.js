import React from "react";

const Product = ({ sku, name, price, type }) => {
  return (
    
    <span className="border border-dark-500 rounded p-3 m-2 small">
      <div className="d-flex">
        <div>
        <div className="float-start">
          <input type="checkbox" className="form-check-input delete-checkbox" />
        </div>
        <div className="m-3 text-center">
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
