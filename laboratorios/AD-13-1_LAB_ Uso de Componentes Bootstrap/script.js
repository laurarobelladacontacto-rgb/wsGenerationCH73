const button = document.getElementById("theButton");
const placeholder = document.getElementById("alertPlaceholder");

button.addEventListener("click", function () {
  placeholder.innerHTML = `
    <div class="alert alert-warning alert-dismissible" role="alert">
      Alerta, presionaste el botón!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
});