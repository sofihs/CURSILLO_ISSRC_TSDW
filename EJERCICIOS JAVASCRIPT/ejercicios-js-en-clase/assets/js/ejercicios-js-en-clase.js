/*clase 11 18/3/2024
//41. Crea una variable llamada `nombre` y asígnale tu nombre. Luego, muestra el valor de 
la variable en la consola

let nombre = "Sofia";
console.log(nombre);

console.log("hola", nombre);

42. Define una variable llamada `edad` y asígnale tu edad. 
//Luego, muestra un mensaje que diga "Tienes X años" en la consola, 
//reemplazando X con el valor de la variable.

let edad = 26;
edad = 30;
console.log("Tenés", edad , "años");
console.log("Tenés " + edad + " años");
console.log("Tenés" + " " + edad + " " + "años");
console.log(`${nombre} tenés ${edad} años`);

/*43. Crea una variable llamada `esEstudiante` y asígnale `true` si eres estudiante o `false` 
si no lo eres. Luego, muestra un mensaje que diga "Eres estudiante" o "No eres 
estudiante" en la consola según el valor de la variable. 

console.log("----- EJ 43 -----");
let esEstudiante = true;
if(esEstudiante = true){ //puede obviarse el true porque se entiende que esEstudiante es booleano. si le ponemos !esEstudiante automaticamente entiende que preguna por false
    //parte verdadera
    console.log("Es estudiante");
    }
    else{
        //parte falsa
        console.log("No es estudiante");
    }
    //sigue el código

45. Define una variable llamada `numero1` y otra llamada `numero2`. Realiza una operación aritmética (suma, resta, multiplicación o división) con estas variables y muestra 
el resultado en la consola.
let numero1 = 5;
let numero2 = 10;
let suma = numero1 + numero2;
let multiplicacion = numero1 * numero2;
let resta = numero1 - numero2;
//let division = numero1 / numero2;
let division = null;

console.log("la suma es: ", suma);
console.log("multiplicacion es: ", multiplicacion);
console.log("resta es: ", resta);
console.log("division es: ", division);

if(numero1 > numero2){
    division = numero1 / numero2;
    console.log("division es num1 / num2: ", division);
}else{

    // puedo tener 2 posibles resultados
    //1- que el numero 2 sea mayor al 1
    if(numero2 > numero1){
        division = numero2 / numero1;
        console.log("division es num2 / num1: ", division);
    }else{
        //los numeros son iguales
        division = numero2 / numero1;
        console.log("numeros iguales ", division);
    }
}

CLASE 12 19/03/2024
46. Crea una variable llamada `temperaturaCelsius` y asígnale un valor en grados 
Celsius. Convierte esta temperatura a grados Fahrenheit utilizando la fórmula `F = (C * 
9/5) + 32` y muestra el resultado en la consola.
let temperaturaCelsius = 27;
let temperaturaFarenheit = (temperaturaCelsius * 9/5) + 32;
console.log("La temperatura Fahrenheit es: " + temperaturaFarenheit);

/*Otra opción: Convertir grados celsius a grados fahrenheit

function convertirAF (celsius){
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log("La temperatura Fahrenheit es: " + convertirAF(-30));

function convertirAF (celsius){
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log("La temperatura Fahrenheit es: " + convertirAF(20));
*/

/*47. Define una variable llamada `precioProducto` y otra llamada `cantidadComprada`. Calcula el costo total de la compra multiplicando estas variables y muestra el resultado en
la consola.*/
/*
let precioProducto = 2500;
let cantidadComprada = 2;
let costoTotalCompra = precioProducto * cantidadComprada;
console.log(`El costo total de la compra es: $ ${costoTotalCompra}`); 
*/
/*48. Crea una variable llamada `radio` y asígnale el radio de un círculo. Calcula el área del
círculo utilizando la fórmula `A = π * r^2` y muestra el resultado en la consola.*/
/*
let radio = 20;
let areaCirculo = Math.PI * Math.pow(radio, 2);
console.log(`El área del círculo es: ${areaCirculo}`);
//forma de resolverlo vista en clase
const PI = 3.1416; //podemos darle el valor a PI como constante o poner Math.PI
let radio = 12.5;
let areaCirculo = PI * (radio **2);
console.log(`El área del círculo con radio ${radio}, es: ${areaCirculo}`); */

/*49. Define una variable llamada `num1` y otra llamada `num2`. Escribe una expresión que verifique si `num1` es mayor que `num2` y muestra el resultado (true o false) en la consola. */
/*
let num1 = 15;
let num2 = 2;
let condicion = num1 > num2;
console.log("Condicion: ", condicion);

if (num1 > num2){
    console.log(`El valor guardado en num1 es mayor que el valor de num2`)
} else{
    console.log(`El valor guardado en num1 NO es mayor que el valor de num2`)
}
*/

/*50. Crea una variable llamada `cadena1` y otra llamada `cadena2`. Concatena estas dos 
cadenas utilizando el operador `+` y muestra la cadena resultante en la consola.*/

/*let cadena1 = "Hola";
let cadena2 = "mundo";

console.log(cadena1 + " " + cadena2);*/
/*51. Crea una variable llamada `edad` y asigna un valor numérico. Escribe una condición 
que verifique si la persona es mayor de 18 años y muestra un mensaje en la consola, como "Eres mayor de edad", si se cumple la condición.*/
/*let edad = 17;
if (edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}
*/
/*53. Crea una variable llamada `diaSemana` y asígnale el nombre de un día de la semana. 
Utiliza una declaración `switch` para mostrar un mensaje que indique si es un "Día 
laboral" o "Fin de semana" en función del valor de `diaSemana`.*/
/*
let diaSemana = "viernes";
    switch (diaSemana){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        console.log("Dia laboral");
        break;
        case "sabado":
        case "domingo":
        console.log("Fin de semana");
        break;
        default:
        console.log("El valor no es válido para día de la semana");
    }

*/
    /*61- Escribe una función llamada esPrimo que tome un número como argumento y retorne 
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y 
por sí mismo.
function esPrimo(numero){
    let tieneResto = false;
    for(i= 2;i <= (numero -1); i++){
        if(numero % i == 0){
            return false;
        }
    }
    return tieneResto;
}
let numero = 7;
console.log(`Es el número ${numero} primo? ${esPrimo(numero)}`); */
/*62- Define una función llamada invierteCadena que tome una cadena de texto como 
argumento y retorne una nueva cadena con los caracteres en orden inverso. visto con for por  consulta de un comáñero*/

/*function invierteCadena (cadena){
    let cadenaInvertida = "";
    for (i = 0; i <= 10; i++){   //for (i = 0; hastaDonde; incremento) una vez que llegue a 10 se corta el for, está haciendo como una especie de "if"

    }
    return cadenaInvertida;
}
let cadenaAInvertir = "hola";*/

// Clase 13 20/03/2024
/*54. Define dos variables, `numero1` y `numero2`, y realiza una comparación para determinar cuál de los dos números es mayor. Luego, muestra el número mayor en la 
consola*/
//console.log("-----EJ 54-----");
/*
let numero1 = 50;
let numero2 = 20;*/
/*
let numero1 = parseInt (prompt("ingrese el num1"));
let numero2 = parseInt (prompt("ingrese el num2"));

if (numero2 > numero1){
    //verdadera
    console.log("el numero mayor es el numero 2, que tiene el valor: ", numero2);
}else{

    if (numero1 == numero2){
        console.log("los numeros son iguales");
    }else{
    //falsa
    console.log("el numero mayor es el numero 1, que tiene el valor: ", numero1);
    }
}
*/
/*55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie 
de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y 
muestra un mensaje correspondiente en la consola.*/

//let color = "rojo";

/*if (color == "rojo"){
    console.log("El color es rojo");
}
else if (color == "azul"){
    console.log("El color es azul")
} else if(color == "verde")
}else{
    console.log("El color no existe");
}
*/
//hecho con switch
/*switch(color){
    case "rojo":
        console.log("El color es rojo");
        break;
    case "verde":
        console.log("El color es azul");
        break;
    case "azul":
        console.log("El color es azul");
        break;
    default:
        console.log("El color no existe")
        break;
}
*/
/* 58. Escribe una función llamada `esPar` que tome un número como argumento y retorne 
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.*/
/*
function saludar(nombreDePersona){

    console.log("Hola", nombreDePersona);

}

saludar("Pepe");
saludar("Maria");
saludar("Jose");
*/
// ver dentro de qué llave está la variable, para  ver el alcance
/*
function saludar(nombreDePersona){

    if (nombreDePersona == "Maria")
    {
        let nn = 3;
        console.log(nn);
    }
    console.log(nn); // sale error porque la variable nn "muere" en la llave anterior
}


saludar(3);
saludar("Maria");
saludar("Jose");
*/
/*
function saludar(nombreDePersona){

    if (nombreDePersona == "Maria")
    {
        let nn = 3;
        console.log(nn);
    }
    let nn = 5;
    console.log(nn); // sale 5 porque está por fuera de la llave anterior
}


saludar(3);
saludar("Maria");
saludar("Jose");
*/
/*
function sumar(num1, num2){
    console.log(num1, num2, "suma: ", num1 + num2)
}

sumar(3 , 5);
sumar(5 , 7);
sumar(2 , 1);

*/
//globales
/*
let num1= 1;
let num2 = 2;

function sumar(num1, num2){
    console.log(num1, num2, "suma: ", num1 + num2)
}

sumar(num1, num2);
*/
//globales
/*
let num1= 1;
let num2 = 2;

function sumar(n1, n2){
//n1 y n2 que son locales
    console.log(num1, num2, "suma: ", num1 + num2)
}

sumar(num1, num2);
sumar (num1, num2);
*

function esPar(n1){
    let divEntero = parseInt (n1 /2);
    let divFloat = parseFloat(n1 /2);

    //es par
    return true;
    // es impar
    return false;
}

esPar(6);
*/
// CLASE 14 21/03/2024

/* 58. Escribe una función llamada `esPar` que tome un número como argumento y retorne 
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.*/

/*console.log("------Ejercicio 58------");

function esPar(numero){
    let resto = numero % 2;
    console.log(`El resto es ${resto}`)
    return resto == 0;
   
}
let entrada = prompt("Indica el número a evaluar");
console.log(`El numero ingresado ${esPar(entrada) ? 'es par' : 'es impar'}`); */
/*
function esPar(numero){
    let resto = numero % 2; 
    console.log(resto == 0)
    if (resto == 0){
        return true
    }
    return false
}

let entrada = prompt("indica el numero a evaluar")
console.log(`el numero ingresado ${esPar(entrada) ? 'es par' : 'es impar'}`);*/

/*function esPar(numero){
    let resto = numero % 2; 
    
        return resto == 0; 
    }
    

let entrada = prompt("indica el numero a evaluar");
let resultado = esPar(entrada);
console.log(`el numero ingresado ${esPar(entrada) ? 'es par' : 'es impar'}`); */

/*59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una 
estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en 
función de la hora. */

/*let hora = 20;
if(hora<12){
    console.log("Buenos días");
} else if(hora<18){
    console.log("Buenas tardes");
}else {
    console.log("Buenas noches");
}
*/

/*let hora = prompt("Ingrese una hora en formato 24hs")
let esMañana = (hora >= 6 && hora <= 12)
let esTarde = (hora > 12 && hora <= 18)
let esNoche = (hora > 18 && hora <= 24) || (hora >= 0 && hora < 6)

if (esMañana){
    console.log("Buen día!")
} else if (esTarde){
    console.log("Buenas tardes!")
} else if (esNoche){
    console.log("Buenas noches!")
} else {
    console.log ("No es una hora válida, ingrese un número entre 0 y 24")
}
*/

/*let hora = parseInt(prompt("Ingrese una hora en formato 24hs"));

if (hora >= 0 && hora <= 12) {
    console.log("Buen día!")
} else if (hora >= 13 && hora <=18){
    console.log("Buenas tardes!")
} else if (hora >= 19 && hora <= 24){
    console.log("Buenas noches!")
} else {
    console.log("No es una hora válida, ingrese un número entre 0 y 24");
}*/

/*60. Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los lados de un triángulo. Escribe una estructura condicional para determinar si el triángulo es 
equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado 
igual).

let lado1 = 3
let lado2 = 3
let lado3 = 3

let equilatero = (lado1 == lado2 && lado1 == lado3)

if (equilatero){
    console.log("Es un triángulo equilátero")
} else {
    let isosceles = (lado1 == lado2 || lado2 == lado3 || lado3 == lado1)
    if (isosceles){
        console.log("Es un triángulo isósceles")
    } else {
    console.log("Es un triángulo es escaleno")
    }
}

*/
// CLASE 15 22/03/24
//FUNCIONES

//console.log("funciones")

/*function sumar5 (valor){
    let suma =  valor + 5;
    return suma;
}
*/
/*let s = sumar5 (10); //15
s = sumar5 (s); // 15 + 5*/
/*let s = sumar5(sumar5(sumar5(3)));
console.log("¿cuánto es el vlaor de s?", s);*/

/*function restar5 (valor){
    let resta = valor - 5;
    return resta;
}

function evalua (valor){
    let operacion = 0;
    if (valor>10){
        operacion = restar5 (valor);
    }
    else{
        operacion = sumar5 (valor);
    }
    return operacion;
}

let resolver = evalua (9);
console.log("El resultado es: " , resolver);
/*function sumar (n1 , n2){
    const 
    return n1 + n2;
}
*/
/*
function sumar5 (valor){
    let suma =  valor + 5;
    return suma;
}

function restar5 (valor){
    let resta = valor - 5;
    return resta;
}

function evalua (valor){
    let operacion = 0;
    if (valor>10){
        operacion = restar5 (valor);
    }
    else{
        operacion = sumar5 (valor);
    }
    return operacion;
}
*/
/*
console.log(evalua (1));
console.log(evalua (2));
console.log(evalua (3));
console.log(evalua (4));
console.log(evalua (5));
console.log(evalua (6));
console.log(evalua (7));
console.log(evalua (8));
console.log(evalua (9));
console.log(evalua (10));
*/
//ciclos
// inicio    final(mientras) paso   inicio     ; final(mientras); paso
/*for (let i= 1; i <=10; i++){ //        (desde donde; hasta cuando   ; ej 1: que vaya de uno en uno, se pone i = i + 1 o i++)
    // lo que se define dentro se ejecuta en cada iteracion o vuelta
    console.log("ciclo numero i: ", 1);
}
*/

// sigue
// un contador es igual a la variable mas la misma variable mas uno
//let contar = 1;
/*
contar = contar + 1; // 2
contar = contar + 1; // 3
contar = contar + 1; // 4
contar = contar + 1; // 5
contar = contar + 1; // 6
*/
// todo el contar de arriba se puede reemplazar por contar++

/*let numeroParaTabla = 7;
for (let i = 1 ; i <= 7; i = i++){
    console.log(numeroParaTabla + " x "+ i + " = " + (numeroParaTabla * i))
}
*/
//EJERCICIO DADO EN CLASE
//Enunciado 1: mostrar numeros pares e impares del 1 al 10
/*for (let i = 1; i <=10; i++){
    if (i % 2 === 0) {
        console.log(i + "es par");}
        else {
            console.log( i + "es impar");
        }
    }

//Enunciado 2: mostrar numeros pares e impares del 90 al 100
for (let i = 90; i <=100; i++){
    if(i % 2 == 0) {
        console.log(i + "es par");
    } else{
        console.log(i + "es impar");
    }
}
*/
//resolución entre todos

/*for (let i = 1; i <= 10; i++){ */

// 4 / 2 = 2
// 5 / 2 = 2.5

// 1 / 2 =
// 2 / 2 =
// 3 / 2 =
/*
    let div1 = parseInt(i/2); //2
    let div2 = parseFloat(i/2); //2.5
    if (div1==div2){
        console.log("el número " + i + " es par");
    }else{
    console.log("el número " + i + " es impar");
    }
}
*/
//con los conceptos del diccionario ya podemos hacer varias cosas
/*
function esPar(numero){
    let div1 = parseInt(numero/2); 
    let div2 = parseFloat(numero/2); 

    if (div1==div2){
        console.log("el número " + numero + " es par");
    }else{
        console.log("el número " + numero + " es impar");
    }
}
for (let i = 1; i <= 10; i++){
    esPar(i)
}
*/
function calcularPeI (inicio, fin){
    for (let i = inicio; i <= fin; i++){
        esPar(i)
    }
}

calcularPeI (1, 10);
console.log();
calcularPeI(90 , 100);