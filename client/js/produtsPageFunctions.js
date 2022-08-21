const cardContainer = document.getElementById("cards-container");
const pagesCategory = document.getElementsByClassName("page-category")[0];
const addToCartButtons = document.getElementsByClassName("addtocart-button");
const itemCounterButoon = document.getElementById("itemCounter");


function showItemByCategory(div, category, products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == category) {
      div.innerHTML += `<div class="card" id="card">
      <div class="image" style="background-image: url(${products[i].image[0]})" onmouseover="this.style.backgroundImage='url(${products[i].image[1]})'" onmouseout="this.style.backgroundImage='url(${products[i].image[0]})'"></div>
      <div class="details">
        <h4>${products[i].name}</h4>
        <p>${products[i].description}</p>
        <div class="card-bottom">
          <button class="addtocart-button" onclick="addProductToCart('${products[i]._id}','${products[i].name}','${products[i].price}','${products[i].description}','${products[i].category}','${products[i].image[0]}','${products[i].quantity}')" >add to cart</button>
          <button class="delete-button" id="delete-button" onclick="deleteItem('${products[i]._id}')" >delete</button>
          <span><h5>${products[i].price}$</h5></span>
        </div>
      </div>
      </div>`;
    }
  }
}


axios.get("/products").then((response) => {
  showItemByCategory(cardContainer, pagesCategory.id, response.data)
})
.catch(
  (err) => {
    console.log(err);
  }
)


function deleteItem (id){
  axios.delete(`/products/${id}`)
  .then(response =>{
    console.log(response);
    alert("Item Has Been Deleted");
  })
  .catch(err=>{
    console.log(err);
  })
}

function addProductToCart (_id,name,price,description,category,image,quantity){
  axios.patch("/carts/add",{
    _id,name,price,description,category,image,quantity
  })
    .then(response =>{
      console.log(response);
      updateCartCounter()
    })
    .catch(err=>{
      console.log(err);
    })
}

function updateCartCounter(){
  axios.get("/carts/619028c92121e8d9e3a2c533")
  .then((res) => {
    const counter = res.data.products.length
    if(counter == 0){
            itemCounterButoon.innerText='';
            itemCounterButoon.style.display="none"
          }
          else{
            itemCounterButoon.innerText=counter
            itemCounterButoon.style.display="block"
          }
  
  })
}

updateCartCounter()
