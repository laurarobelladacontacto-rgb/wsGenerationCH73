//lab final 29/09/2026
//laura robellada

// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

export function delUser(id) {
  // Construir la URL con el id del usuario a eliminar
  const url = getServerURL() + "/users/" + id;

  // Realizar la petición HTTP con el método DELETE
  return fetch(url, {
    method: "DELETE"
  }).then((response) => response.json());
}