const tableCountainer = document.getElementById("table");
const total = document.getElementById("total");
const subTotal = document.getElementById("sub-total");

function render() {
  axios
    .get("/carts/619028c92121e8d9e3a2c533")
    .then((response) => {
      const newCart = response.data.products;
      console.log(response.data.products);
      updateTableProducts(newCart);
      updateTotal(newCart);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateTableProducts(coustomerCart) {
  let rawHtml = "";
  

  for (let i = 0; i < coustomerCart.length; i++) {
    
    rawHtml += `
        <tr class="item-row">
        <td class="item">
          <img class="item-img" src="${coustomerCart[i].image}"> 
          <div class="item-description">
            <h5>${coustomerCart[i].name}</h5>
          </div>
        </td>
        <td class="item-price">${coustomerCart[i].price}$</td>
        <td class="item-quantity">
          <span class="minus" ><i class="fas fa-minus" id="minus-${
            coustomerCart[i]._id
          }"></i></span>
          <span class="quantity">${coustomerCart[i].quantity}</span>
          <span class="plus" ><i class="fas fa-plus" id="plus-${
            coustomerCart[i]._id
          }"></i><span>
        </td>
        <td class="item-total">${
          coustomerCart[i].price * coustomerCart[i].quantity
        }$</td>
        <td  ><span class="remove-icon"><i onclick="deleteItemFromCart('${
          coustomerCart[i]._id
        }')" class="fas fa-times"></i></span></td>
        </tr>`;
  }
  tableCountainer.innerHTML = rawHtml;
}

function deleteItemFromCart(id) {
  console.log(id + "hello");
  axios
    .patch(`/carts/delete/${id}`)
    .then((response) => {
      console.log("hello");
      console.log(response);
      render();
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateTotal(coustomerCart) {
  let sum = 0;
  for (let i = 0; i < coustomerCart.length; i++) {
    sum += coustomerCart[i].price * coustomerCart[i].quantity;
  }
  total.innerHTML = sum + `$`;
  subTotal.innerHTML = sum + `$`;
}

render();

