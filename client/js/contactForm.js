
const contactForm = document.getElementById("contact-Form");

contactForm.addEventListener("submit", addMessagesFromContact);

function addMessagesFromContact(e) {
  e.preventDefault();
  const Fullname = document.getElementById("coFullname").value,
    Mail = document.getElementById("coEmail").value,
    Message = document.getElementById("coMessage").value;

  const userMessageObj = {
    Fullname,
    Mail,
    Message,
  };

  axios
    .post("/contact", userMessageObj)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

