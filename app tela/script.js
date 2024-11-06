const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

function toggleButtonState() {
  loginButton.disabled = !(usernameInput.value && passwordInput.value);
}

usernameInput.addEventListener("input", toggleButtonState);
passwordInput.addEventListener("input", toggleButtonState);

loginButton.addEventListener("click", function () {
  alert("Login realizado com sucesso!");
});
