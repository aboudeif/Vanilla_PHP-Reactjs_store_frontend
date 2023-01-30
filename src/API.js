const api = "http://localhost:8080/php-test";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const add = (product) =>
  fetch(`${api}/api/new`, { 
    method: 'POST',
    body: JSON.stringify(product),
    headers })
    .then((res) => res.json());

export const remove = (sku) =>
  fetch(`${api}/api/delete`, { 
    method: 'POST',
    body: JSON.stringify({'sku' : sku }),
    headers })
    .then((res) => res.json());

    export const getAll = () =>
    fetch(`${api}/`, { headers })
      .then((res) => res.json())
      .then((data) => data);
  

