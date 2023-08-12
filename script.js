const theForm = document.querySelector("form");
const theInput = document.querySelector("#thePassword");
const buttonText = document.querySelector("#theButton");

theForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars
});

buttonText.addEventListener("click", function () {
  if (buttonText.innerText === "Show Password") {
    buttonText.innerText = "Hide Password";
    theInput.type = "text";
    console.log("Hallo");
  } else if (buttonText.innerText === "Hide Password") {
    buttonText.innerText = "Show Password";
    theInput.type = "password";
  }
});
