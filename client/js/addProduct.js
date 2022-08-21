const addProductForm = document.getElementById("addProductForm");

addProductForm.addEventListener("submit", addProduct);

function addProduct(e) {
  e.preventDefault();
  const name = document.getElementById("form-name").value;
  const price = document.getElementById("form-price").value;
  const category = document.getElementById("form-category").value;
  const image1 = document.getElementById("form-image1").value;
  const image2 = document.getElementById("form-image2").value;
  const description = document.getElementById("form-description").value;
  const image = [image1, image2];

  axios
    .post("/products", {
      name,
      price,
      category,
      image,
      description,
      quantity: 1,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", updateProduct);

function updateProduct(e) {
  e.preventDefault();
  const id = document.getElementById("form-id").value;
  const name = document.getElementById("form-name").value;
  const price = document.getElementById("form-price").value;
  const category = document.getElementById("form-category").value;
  const image1 = document.getElementById("form-image1").value;
  const image2 = document.getElementById("form-image2").value;
  const description = document.getElementById("form-description").value;
  const image = [image1, image2];
  const updatedObject = { id, name, price, category, image, description };

  axios
    .patch("/products/:id", updatedObject)
    .then((response) => {
      console.log(response);
      console.log("hello");
    })
    .catch((err) => {
      console.log(err);
    });
}

