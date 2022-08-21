function showAllMessages(messages) {
    const userMessagesContainer = document.getElementById(
      "userMessagesContainer"
    );
  
    console.log("hii",userMessagesContainer);
    for (let i = 0; i < messages.length; i++) {
      userMessagesContainer.innerHTML += `
    </div>
    <div class="user-name">
      <div class="firstName">${messages[i].FullName}</div>
      <div class="email">${messages[i].Mail}</div>
      <div class="message">${messages[i].Message}</div>
    </div>`;
    }
  }
  
  axios
    .get("/contact")
    .then((response) => {
      console.log(response.data);
      const messages = response.data;
      showAllMessages(messages)
    })
    .catch((err) => {
      console.log(err);
    });
  