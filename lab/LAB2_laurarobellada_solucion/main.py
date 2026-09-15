#LAB 2 LAURA ELVIA ROBELLADA LÓPEZ
#CALCULADORA
#Escribir un programa que reciba dos números como entrada, los sume e imprima el resultado.
#Usamos float: float(), el programa puede procesar tanto números enteros (como 5, que convierte a 5.0) como decimales (como 5.5), asegurando que no falle sin importar el tipo de número que ingrese el usuario o el evaluador automático.

#SUMA
# 1. Leemos el primer número desde la terminal
# 2. Leemos el segundo número desde la terminal
# 3. Realizamos la suma
# 4. Mostramos solo el resultado

numero1 = float(input())
numero2 = float(input())
suma = numero1 + numero2
print(suma)


#TIEMPO EXTRA: CALCULADORA CON MÁS OPERACIONES
# (Menú de operaciones)
print("\n--- MENÚ DE OPERACIONES ADICIONALES ---")
print("1. Restar")
print("2. Multiplicar")
print("3. Dividir")
print("4. Módulo")
print("5. Sumar 3 números")
print("6. Operación combinada libre")

opcion = input("Elige una opción (1-6): ")

# Elegir qué operación realizar con dos números (Restar, Multiplicar, Dividir, Módulo)
if opcion in ["1", "2", "3", "4"]:
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))

    if opcion == "1":
        # Punto 1: Restar el segundo al primero
        print("Resultado:", num1 - num2)

    elif opcion == "2":
        # Punto 2: Multiplicar dos números
        print("Resultado:", num1 * num2)

    elif opcion == "3":
        # Punto 3: Dividir el primero entre el segundo
        if num2 != 0:
            print("Resultado:", num1 / num2)
        else:
            print("Error: No se puede dividir entre cero.")

    elif opcion == "4":
        # Punto 4: Operación de módulo (residuo)
        print("Resultado:", num1 % num2)

# Punto 5: Sumar 3 números
elif opcion == "5":
    n1 = float(input("Primer número: "))
    n2 = float(input("Segundo número: "))
    n3 = float(input("Tercer número: "))
    print("Resultado de la suma:", n1 + n2 + n3)

# Punto 6: Combinar operaciones con 3 o más números
elif opcion == "6":
    expresion = input("Escribe tu operación completa (ej. 2 + 4 - 3 o 4 * 5 + 1 / 3): ")
    print("Resultado:", eval(expresion))

else:
    print("Opción no válida.")


