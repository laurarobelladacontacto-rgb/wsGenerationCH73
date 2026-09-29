//lab final 29/09/2026
//laura robellada
// Task 3: addUser(first_name, last_name, email)

//traemos la url base del servidor
import { getServerURL } from './task1.js';

export function addUser (first_name, last_name, email) {
    const url = getServerURL() + "/users";

//llamar a los usuarios
return fetch (url)
    .then((responsive) => responsive.json())
    .then((users) => {
      // Obtener el id más alto de forma directa
      const maxId = Math.max(...users.map((u) => u.id), 0);

      // Enviar el nuevo usuario mediante POST
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: maxId + 1,
          first_name: first_name,
          last_name: last_name,
          email: email
        })
      });
    })
    .then((response) => response.json());
}
