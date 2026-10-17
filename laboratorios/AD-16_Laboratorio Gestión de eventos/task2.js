// Obtiene el nombre y el apellido del formulario  
function getFormvalue(event) {
  event.preventDefault();

  const form = document.getElementById("form1");
  const firstName = form.elements["fname"].value;
  const lastName = form.elements["lname"].value;

  console.log("First name:", firstName);
  console.log("Last name:", lastName);
}