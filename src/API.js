
const api = "https://abdallah-aboudeif.000webhostapp.com";

const headers = {
  Accept: "application/json",
};

export const add = (product) =>
  fetch(`${api}/new`, {
    method: 'POST',
    mode: 'no-cors',
    headers,
    body: product
     })

export const remove = (skus) =>
  fetch(`${api}/delete`, { 
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(skus),
     })


  export const getAll = () =>
  fetch(`${api}/`, { headers })
    .then((res) => res.json())
    .then((data) =>Object.keys(data).map((key) =>  data[key]))
