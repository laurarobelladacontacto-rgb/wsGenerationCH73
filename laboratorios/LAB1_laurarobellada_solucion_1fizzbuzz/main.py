#Lunes 14/septiembre/2026 Primer LAB Laura Robellada
#Programa que imprima los primeros 1000 números de FizzBuzz
#Rango de números 1-1000 por lo tanto se utiliza un bucle for para recorrer los números del 1 al 1000

for numero in range(1, 1001):
    #Se evalua la divisivilidad del número actual por 3 y 5 utilizando el operador módulo (%) 
    #Se utiliza una estructura condicional para determinar si el número es divisible por 3, 5 o ambos

    #Primero evaluamos si el número es divisible por 3 y 5, en ese caso se imprime "FizzBuzz"
    if numero % 3 == 0 and numero % 5 == 0:
        print("FizzBuzz")

    #Si no es divisible por ambos, evaluamos si es divisible solo por 3, en ese caso se imprime "Fizz"
    elif numero % 3 == 0:
        print("Fizz")

    #Si no es divisible por 3, evaluamos si es divisible solo por 5, en ese caso se imprime "Buzz"
    elif numero % 5 == 0:
        print("Buzz")

    #Si no es divisible por ninguno de los dos, se imprime el número actual
    else:
        print(numero)

    
  