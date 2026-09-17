#LAB 3 CALCULADORA MEJORADA
#Laura Elvia Robellada 

def addmultiplenumbers(numbers):
    # Suma todos los elementos de la lista
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    # Multiplica secuencialmente los elementos de la lista
    total = 1
    for num in numbers:
        total *= num
    return total

def isiteven(num):
    # Verifica que sea un número entero y par
    if isitaninteger(num) and num % 2 == 0:
        return True
    return False

def isitaninteger(num):
    # Evalúa si el tipo o valor corresponde a un entero
    if isinstance(num, int):
        return True
    if isinstance(num, float) and num.is_integer():
        return True
    return False

def main():
    print("--- CALCULADORA INTERACTIVA ---")
    print("1. Sumar varios números")
    print("2. Multiplicar varios números")
    print("3. Verificar si un número es par")
    print("4. Verificar si un número es entero")
    
    opcion = input("Elige una opción (1-4): ")
    
    if opcion in ["1", "2"]:
        entrada = input("Ingresa los números (separados por espacio o comas): ")
        # .replace(",", " ") permite procesar comas y espacios por igual
        numeros = [float(n) for n in entrada.replace(",", " ").split()]
        
        if opcion == "1":
            resultado = addmultiplenumbers(numeros)
            print(f"La suma es: {resultado}")
        else:
            resultado = multiplymultiplenumbers(numeros)
            print(f"El producto es: {resultado}")
            
    elif opcion in ["3", "4"]:
        entrada = input("Ingresa un número: ")
        numero = float(entrada)
        # Quita el .0 visual si el número ingresado es un entero puro
        numero_formateado = int(numero) if numero.is_integer() else numero
        
        if opcion == "3":
            if isiteven(numero):
                print(f"El número {numero_formateado} es par.")
            else:
                print(f"El número {numero_formateado} es impar.")
        else:
            if isitaninteger(numero):
                print(f"El número {numero_formateado} es un número entero.")
            else:
                print(f"El número {numero_formateado} no es un entero.")
    else:
        print("Opción no válida.")

if __name__ == "__main__":
    main()



#1-Función para SUMAR: addmultiplenumbers(numbers)
    #def addmultiplenumbers(numbers):: Define la función. El parámetro numbers recibe una lista de números (por ejemplo: [2, 4, 6]).

        #sum(numbers): Python ya tiene una función integrada llamada sum(). Toma una lista de números y calcula la suma total automáticamente.

        #return: Devuelve ese resultado hacia afuera para que la prueba automática (o el menú) lo reciba.

#2-Función para MULTIPLICAR: multiplymultiplenumbers(numbers)
    #total = 1: Creamos una variable acumuladora. Usamos 1 y no 0 porque cualquier número multiplicado por cero da cero (el 1 es el elemento neutro de la multiplicación).

    #for num in numbers:: Es un bucle que recorre la lista elemento por elemento. Si la lista es [2, 3, 4], en la primera vuelta num vale 2, en la segunda 3 y en la tercera 4.

    #total *= num: Es una forma corta de escribir total = total * num. En cada vuelta toma el valor actual de total y lo multiplica por el nuevo número.

      #Vuelta 1: 1 * 2 = 2
      #Vuelta 2: 2 * 3 = 6
      #Vuelta 3: 6 * 4 = 24
      #return total: Devuelve el resultado final acumulado (24).

#3-Función para saber si es NUM ENTERO: isitaninteger(num)
    #isinstance(num, int): Comprueba si el tipo de dato original es un entero puro (como 5 o -10). Si lo es, devuelve True.

    #num.is_integer(): En Python, si un número entra como un decimal (float), por ejemplo 5.0, el método .is_integer() verifica si la parte decimal es cero. 5.0 devolverá True, pero 5.3 devolverá False.

    #return False: Si no se cumplió ninguna de las condiciones anteriores (por ejemplo si recibe un string o un decimal como 2.5), concluye que no es un entero.

#4-Función para saber si es NUM PAR: isiteven(num)
    #isitaninteger(num): Primero reutilizamos la función anterior para asegurar que el número sea entero. Un número con decimales (como 4.5) no se considera par.
    #num % 2 == 0: El operador % (módulo) calcula el residuo de una división.
      #Si el residuo es cero, significa que el número es divisible por 2, y por lo tanto es par.
      #Si divides 6 / 2, el resultado es 3 y el residuo es 0 (es par).
      #Si divides 7 / 2, el resultado es 3.5 y el residuo es 1 (es impar).
      #si el número es entero y su residuo al dividirlo entre 2 es cero, entonces es par y la función devuelve True. Si no, devuelve False.

      #and: Exige que se cumplan las dos cosas al mismo tiempo: ser entero Y tener residuo igual a cero. Si ambas se cumplen, devuelve True; de lo contrario, False.

#5-lógica interactiva: main()
    #print(...): Muestra el menú de texto en la consola para que la persona sepa qué opciones tiene.
    #input(...): Detiene la ejecución del programa y espera a que el usuario escriba algo en la consola y presione Enter. Lo que escriba se guarda como un texto (string) en la variable opcion.

    #entrada.split(): Si el usuario escribe "2 4 6", el método .split() corta ese texto por los espacios y crea una lista de textos: ["2", "4", "6"].
    #[float(n) for n in ...]: Es una comprensión de listas en Python. Toma cada texto de la lista y lo convierte a número (float), obteniendo la lista final [2.0, 4.0, 6.0]
    #Llamamos a la función correspondiente pasándole la lista numeros y mostramos la respuesta formateada con un print(f"...").
    #Convertimos directamente lo que escribe el usuario a número con float(...), evaluamos con isiteven o isitaninteger y mostramos el resultado booleano (True o False).

#6-El disparador de ejecución: if __name__ == "__main__":
    #__name__: Es una variable especial que Python asigna automáticamente.

    #Si ejecutas el archivo directamente tú misma en VS Code, __name__ vale "__main__", por lo que la condición se cumple y llama a la función main().
    #Si el sistema de evaluación automática importa tu archivo desde fuera para probar las funciones por separado, __name__ no valdrá "__main__", por lo que main() no se ejecutará y el calificador automático no se quedará trabado esperando un input().