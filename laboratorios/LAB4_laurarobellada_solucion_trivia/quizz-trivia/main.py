#LAB 4 QUIZZ-TRIVIA VIERNES 18/SEPTIEMBRE/2020
#LAURA ROBELLADA

# Para que Python pueda comunicarse con internet y obtener información de la API de trivia (Open Trivia Database), necesitamos una herramienta que se encarga de hacer peticiones web. En Python, esa herramienta es la librería requests.
#instalar la librería request; instalarla usando el gestor de paquetes de Python (pip), en terminal o consola de comandos, ejecutando el siguiente comando: pip install requests

import requests

import requests

def trivia_fetch(num):
    url = f"https://numbersapi.com/{num}?json"
    response = requests.get(url)
    trivia = response.json()
    return trivia


    #https://opentdb.com/api.php?amount={num}


def main():
    cantidad = int(input("¿Cuántas preguntas quieres? "))
    trivia = trivia_fetch(cantidad)
    print(trivia)

    for pregunta in trivia["results"]:
        print(pregunta["question"])

       
if __name__ == "__main__":
    main()















