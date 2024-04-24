const API_URL = "https://fakestoreapi.com";

let productCards = document.querySelector(".products");

async function fetchData(api) {
    const data = await fetch(`${api}/products/${id}`, {
        method: "GET",
    });

    data
    .json()
    .then((res) => console.log(res))
    .catch((arr) => console.log(arr))
}

fetchData(API_URL);


