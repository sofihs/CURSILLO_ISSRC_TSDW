/*5) Algoritmo para adivinar un número. */
// Juego Adivina el número
// Ingresar nombre - ingresar un número entre 1 y 10
//Primero: Declarar el total de variables a utilizar en el juego
let numMin = 1; //Variable que almacena el valor mínimo del rango del número a adivinar
let numMax = 10; //Variable que almacena el valor máximo del rango del número a advinar
let numAleatorio = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin; //Variable del número generado aleatoriamente por Math.random
let intentos = 0; //Variable para contar los intentos, sirve como contador para el bucle
let nombre = prompt("Bienvenido al juego Adivina el número, ¿cuál es tu nombre?"); //Variable para almacenar el nombre del jugador
let numero; //Variable que almacena el número que ingresa el jugador

for (intentos; intentos < 5; intentos++){ //Bucle que funcionara si se cumple la condicion de que intentos valga menos que 5
    //numero = parseInt(prompt(nombre+', ingresa un número entre el '+numMin+' y el '+numMax)); //Almacena en la variable número el número ingresado por el jugador
    let input = prompt(nombre + ', ingresa un número entre el ' + numMin + ' y el ' + numMax);
    
    //Verificar si el input es un número válido
    while (isNaN(input)){
        alert('Por favor, ingresa un número válido entre el ' + numMin + ' y el ' + numMax);
        input = prompt(nombre + ', ingresa un número entre el ' + numMin + ' y el ' + numMax);
    }
    numero = parseInt(input)  

    if (numero >= numMin && numero <= numMax){ //Verificar si el número ingresado se encuentra dentro del rango asignado al principio (entre 1 y 10), si se cumple esta condición es porque el jugador ingreso un número que está dentro del rango asignado
        if(numero < numAleatorio){ //Verificar si el número ingresado es menor al número aleatorio, si es así, se le manda mensaje al jugador
            alert('El número que ingresaste es más bajo');
        } else if(numero > numAleatorio){ //Verificar si el número ingresado es mayor al número aleatorio, si es así, se le manda mensaje al jugador
            alert('El número que ingresaste es más alto');
        } else if(numero == numAleatorio){ //Verificar si el número ingresado coincide con el número aleatorio, si es así, se utiliza la sentencia break para salir del bucle
            break;
        }
    } else {
        alert('Debes ingresar un número entre el '+numMin+' y '+numMax); //Si el número ingresdo no está en el rango asignado al principio, se le manda ese mensaje al jugador
    }
}
//Controlar qué pasó en el bucle: si el número de intentos se agotó o si el usuario adivinó el número
if(numero == numAleatorio){ //Verificar si al salir del bucle el número ingresado coincide con el número aleatorio, si es así, se le manda mensaje al jugador
    alert('¡Felicidades, adivinaste el número en '+(intentos + 1)+' intentos!');
} else { //Se salió del bucle porque el jugador agotó el número de intentos, entonces se le manda el mensaje al jugador
    alert('Agotaste el número de intentos, ¡Suerte para la próxima!');
}
