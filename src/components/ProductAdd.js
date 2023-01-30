import React, { useState } from "react";
import { Link } from "react-router-dom";
import ValidationMessage from "./ValidationMessage";

const ProductAdd = () => {
  const type_options = [
    { DVD: ["Size (MB)"] },
    { Book: ["Weight (KG)"] },
    { Furniture: ["Height (CM)", "Width (CM)", "Length (CM)"] },
  ];

  const [type, setType] = useState(null);

  const handleTypeSwitch = (e) => {
    setType(type_options[e.target.selectedIndex]);
  };
  
  const patterns = {
    'sku': /(?:[a-z]+-){2}[a-z]+/i,
    'name' : /^[a-z ]+$/i
  };

  // const validationmessage = <ValidationMessage message='Please, provide the data of indicated type'></ValidationMessage>
  const mismatchMessage = <ValidationMessage message='Please, submit required data'></ValidationMessage>

  const handlePatternValidation = (e) => {
    e.target.style.textDecoration = e.target.value.match(patterns[e.target.id]) ?  'none' : 'underline dotted red';
    e.target.value.match(patterns[e.target.id]) ?
    document.querySelector('#notifications').innerHTML = '' :
    document.querySelector('#notifications').innerHTML = 'Please, provide the data of indicated type';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    if (Object.values(data).every((value) => value !== '')) {
      fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      document.querySelector('#notifications').innerHTML = mismatchMessage;
    }
  };

  return (
    <div>
      <header className="d-flex flex-row justify-content-between align-items-center">
        <h2 className="d-inline">Product Add</h2>
        <div>
          <input
            type="submit"
            value="Save"
            className="mx-1 btn btn-primary p-1"
            form="product_form"
          />
          <Link key={"cancel"} to={"/"} className="mx-1 btn btn-light p-1">
            Cancel
          </Link>
        </div>
      </header>
      <hr />

      <form action="" id="product_form" className="container" onSubmit={handleSubmit}>
        <div className="row">
          <span id="notifications" className="col badge text-bg-warning mb-4 form-text"></span>
        </div>
        <div className="row text-left">
          <label htmlFor="sku" className="col-3 my-2 text-start">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            id="sku"
            className="col-4 my-2 border form-control-sm"
            required
            form="product_form"
            onChange={handlePatternValidation}
          />
          
        </div>

        <div className="row">
          <label htmlFor="name" className="col-3 my-2 text-start">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="col-4 my-2 border form-control-sm"
            required
            form="product_form"
            onChange={handlePatternValidation}
          />
        </div>

        <div className="row">
          <label htmlFor="price" className="col-3 my-2 text-start">
            Price ($){" "}
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="col-4 my-2 border form-control-sm"
            required
            form="product_form"
          />
        </div>

        <div className="row">
          <label
            htmlFor="type-switcher"
            id="productType"
            className="col-3 my-2 text-start"
          >
            Type Switcher
          </label>
          <select
            name="type-switcher"
            id="type-switcher"
            defaultValue="none"
            className="col-4 my-2 border form-control-sm"
            onChange={handleTypeSwitch}
            form="product_form"
            aria-describedby="type-switcher-help"
            required
          >
            <option value="none" disabled>
              Type Switcher
            </option>
            <option value="DVD" id="DVD">
              DVD
            </option>
            <option value="Book" id="Book">
              Book{" "}
            </option>
            <option value="Furniture" id="Furniture">
              Furniture
            </option>
          </select>
          {type && (
            <small className="col-8 mb-4 text-start form-text text-muted" id="type-switcher-help">
              Please, provide{" "}
              {type[Object.keys(type)[0]]
                .map((v) => v.split(" ")[0].toLowerCase())
                .join(", ")}{" "}
              
            </small>
          )}
        </div>

        {type &&
          type[Object.keys(type)[0]].map((v) => (
            <div className="row" key={v.split(" ")[0]}>
              <label
                htmlFor={v.split(" ")[0].toLowerCase()}
                className="col-3 my-2 text-start"
              >
                {v}
              </label>
              <input
                type="number"
                name={v.split(" ")[0].toLowerCase()}
                id={v.split(" ")[0].toLowerCase()}
                className="col-4 my-2 border form-control-sm"
                required
                form="product_form"
              />
            </div>
          ))}
      </form>
    </div>
  );
};

export default ProductAdd;
