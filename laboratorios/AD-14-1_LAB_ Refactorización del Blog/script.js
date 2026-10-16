const formulario = document.getElementById("formContacto");
const contenedorAlerta = document.getElementById("alertaMensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  contenedorAlerta.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Mensaje enviado
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `;

  formulario.reset();
});