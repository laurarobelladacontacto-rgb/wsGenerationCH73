#EJERCICIO PARA CONSULTAR UNA API (GET Y JSON)
#El request fue a una api, después fue al servidor y el servidor respondió con un json, que es lo que se imprime en la consola
#El Api es un puente para que los programas se comuniquen sin importar en que tecnologia estén desarrollados, es decir, que un programa en python pueda comunicarse con un programa en java, por ejemplo.

import requests
respuesta=requests.get("https://jsonplaceholder.typicode.com/users/1")

publicacion = respuesta.json()
print(publicacion)