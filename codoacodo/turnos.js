
// crear el objeto
const credenciales = {
    email: "mocho@gmail.com",
    password: "1234",
  };

  let form = document.querySelector("form");

  console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userEmail = form.elements.email.value;
    let userPassword = form.elements.password.value;

    if (
      credenciales.email === userEmail &&
      credenciales.password === userPassword
    ) {
      localStorage.setItem("logged", "true");
      window.location.href = "";
    } else {
      alert("Por favor vuelva a intentarlo, las credenciales son invalidas");
    }
  });
