//lab final 29/09/2026
//laura robellada
// Task 2: listUsers()

//traemos la url base del servidor
import { getServerURL } from './task1.js';

//exportamos la funcion listusers para poder llamarla
export function listUsers() {
    //concatena la URL base con el recurso o ruta de la API ("http://localhost:3000/users")
        return fetch(getServerURL() + "/users")
            //fetch() hace una petición HTTP de tipo GET a esa dirección para solicitar la lista de usuarios.
    .then(function(response) {
        return response.json(); })

            /*El primer .then() recibe la respuesta del servidor (response).Como los datos llegan en texto plano, llamamos a response.json() para convertirlos a un objeto o arreglo de JavaScript manejable.*/

    .then(function(users) {
        console.log(users); 
        return users; })
        //recibe los datos ya transformados (then) e imprime la lista en la terminal
}

