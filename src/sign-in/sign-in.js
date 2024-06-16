const loginBtn = document.querySelector("#login-btn");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const handleSubmit = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("O e-mail é inválido");
    return;
  }

  if (passwordInput.value === "") {
    alert("Senha inválida");
    return;
  }

  if (
    emailInput.value !== "test123@gmail.com" ||
    passwordInput.value !== "test123"
  ) {
    alert("Credenciais inválidas");
    return;
  }

  alert("Login finalizado, redirecionando usuário");
  location.replace("../home");
};

loginBtn.addEventListener("click", handleSubmit);
