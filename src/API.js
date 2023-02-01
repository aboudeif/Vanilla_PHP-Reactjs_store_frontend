import { json } from "react-router-dom";

const api = "https://abdallah-aboudeif.000webhostapp.com";

const headers = {
  Accept: "application/json",
};

export const add = (product) =>
  fetch(`${api}/new.php`, {
    method: 'POST',
    mode: 'no-cors',
    headers,
    body: product,
     })
     .then((res) => res.json())
     .then((res) => Object.keys(res).map((key) =>  res[key]))
     .then((res) => res['message'])

export const remove = (skus) =>
  fetch(`${api}/delete.php`, { 
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(skus),
     })


  export const getAll = () =>
  fetch(`${api}/`, { headers })
    .then((res) => res.json())
    .then((data) =>Object.keys(data).map((key) =>  data[key]))
