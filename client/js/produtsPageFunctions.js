const cardContainer = document.getElementById("cards-container");
const pagesCategory = document.getElementsByClassName("page-category")[0];
const addToCartButtons = document.getElementsByClassName("addtocart-button");
const itemCounterButoon = document.getElementById("itemCounter");

axios
  .get("/products")
  .then((response) => {
    showItemByCategory(cardContainer, pagesCategory.id, response.data);
  })
  .catch((err) => {
    console.log(err);
  });

function showItemByCategory(div, itemCategory, products) {
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    const { name, price, description, image } = item;
    if (item.category == itemCategory) {
      div.innerHTML += `<div class="card" id="card">
      <div class="image" style="background-image: url(${image[0]})"
          onmouseover="this.style.backgroundImage='url(${image[1]})'"
          onmouseout="this.style.backgroundImage='url(${image[0]})'"></div>
      <div class="details">
          <h4>${name}</h4>
          <p>${description}</p>
      </div>
      <div class="card-bottom">
          <button class="addtocart-button"  onclick='addProductToCart()'>Add to cart</button>
          <span>
              <h5>${price}$</h5>
          </span>
      </div>
      </div>`;
    }
  }
  pagesCategory.innerHTML = `<h1>${pagesCategory.id}</h1>`;
}
// onclick="addProductToCart('${products[i]._id}','${products[i].name}','${products[i].price}','${products[i].description}','${products[i].category}','${products[i].image[0]}','${products[i].quantity}')">add
// <button class="delete-button" id="delete-button" onclick="deleteItem('${products[i]._id}')">delete</button>

// function deleteItem(id) {
//   axios
//     .delete(`/products/${id}`)
//     .then((response) => {
//       console.log(response);
//       alert("Item Has Been Deleted");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

function addProductToCart() {
  console.log("item added");
  axios.patch();
}

// function updateCartCounter() {
//   axios.get("/carts").then((res) => {
//     const counter = res.data.products.length;
//     console.log(counter);
//     if (counter == 0) {
//       itemCounterButoon.innerText = "";
//       itemCounterButoon.style.display = "none";
//     } else {
//       itemCounterButoon.innerText = counter;
//       itemCounterButoon.style.display = "block";
//     }
//   });
// }

// updateCartCounter();
