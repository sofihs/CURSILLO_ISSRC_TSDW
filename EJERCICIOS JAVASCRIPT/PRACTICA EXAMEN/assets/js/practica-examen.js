//usar ciclo for para resolver
//1-Escribe una función llamada imprimirNumeros que tome un número como parámetro e imprima todos los números desde 1 hasta ese número utilizando un ciclo for.

function imprimirNumeros(numero){
    for(let i = 1; i<=numero; i++){
        console.log(i);
    }
}
console.log(imprimirNumeros(5));

//2-Crea una función llamada contarCaracteres que tome una cadena de texto y un carácter como parámetros,
// y devuelva la cantidad de veces que el carácter aparece en la cadena. 
//Utiliza un ciclo for para recorrer la cadena.

function contarCaracteres(cadena, caracter){ //Función contarCaracteres que toma una cadena de texto y un carácter como parámetros
    let contador = 0; //// Inicializar un contador para contar las veces que aparece el carácter en la cadena
    for(let i = 0; i < cadena.length; i++){ // Iniciar un ciclo for para recorrer la cadena de texto
        if (cadena[i] === caracter) { // Comprobar si el carácter en la posición actual es igual al carácter dado como parámetro
            contador++; // Si es así, se incrementa el contador
        }
    }
    return contador; // Devolver la cantidad de veces que el carácter aparece en la cadena
}
console.log(contarCaracteres("programacion", "a")); // Llamar a la función contarCaracteres con la cadena "programacion" y el carácter "a" como parámetros

//3-Implementa una función llamada duplicarCaracteres que tome una cadena de texto como parámetro y devuelva una nueva cadena donde cada carácter se duplique. 
//Utiliza un ciclo for para iterar sobre la cadena original.
function duplicarCaracteres(cadenaDeTexto){ // Función llamada duplicarCaracteres que toma una cadena de texto como parámetro
    let nuevaCadena =""; // Inicializar una nueva cadena vacía donde se almacenarán los caracteres duplicados
    for(let i = 0; i < cadenaDeTexto.length; i++){ // Se inicia un ciclo for para iterar sobre la cadena original
        nuevaCadena+= cadenaDeTexto[i]+cadenaDeTexto[i]; // Se concatena dos veces cada carácter de la cadena original a la nueva cadena
    }
    return nuevaCadena; // Se devuelve la nueva cadena con los caracteres duplicados
}
console.log(duplicarCaracteres("Hola")); // Se llama a la función duplicarCaracteres con la cadena "Hola" como parámetro y se muestra el resultado

//4-Desarrolla una función llamada invertirNumero que tome un número como parámetro y devuelva el número invertido. Por ejemplo, si se pasa el número 123, la función debería devolver 321. 
//Utiliza un ciclo for para invertir el número.

function invertirNumero(numero){ // Se define una función llamada invertirNumero que toma un número como parámetro
    let numeroInvertido = ""; // Se inicializa una cadena vacía para almacenar el número invertido.
    console.log(numeroInvertido);
    //Se utiliza un ciclo for para invertir el número
    for (let i = numero.length -1; i >= 0; i--){ // Se itera sobre cada dígito del número en orden inverso (i se decrementa en 1)
        //console.log(i) // Impresión de i
        numeroInvertido += numero [i]; // Se concatena cada dígito al número invertido.
        console.log(numeroInvertido); // Imprime el número invertido en cada iteración
    }
    return numeroInvertido; // Devuelve el número invertido.
}

let numero = "560123"; // Se define el número que se va a invertir.
// Se imprime el número original y el número invertido.
console.log(`numero original:  ${numero}`);
console.log(`numero invertido: ${invertirNumero(numero)}`);

//resolución en clase
/*
function invertirNumero(numero){
    let numeroString = numero.toString() //otra forma podría ser numero= numero+""
    let numeroInvertido= "";
    console.log(numeroInvertido);
    for (let i = numeroString.length -1 ; i >= 0 ; i--){ //el -1 es para ver el valor máximo de la cadena, le está restando un valor a numeroString.length
        console.log(i)
        numeroInvertido+= (numeroInvertido + numeroString[i]) //corchete para acceder a cada una de las posiciones dentro de la cadena
        console.log(numeroInvertido) //para ver qué es lo que hace
    }
    return parseInt(numeroInvertido); //pasarlo de cadena a entero
} 
console.log(invertirNumero(856));
//let numeroEntrada = prompt("Ingrese un número");
let numeroInvertido = invertirNumero(numeroEntrada);
console.log(`El numero ingresado es: ${numeroEntrada}`);
console.log(`El numero invertido es: ${numeroInvertido}`);
*/ 

//5-Escribe una función llamada calcularPotencia que tome dos números como parámetros, la base y el exponente, 
//y devuelva el resultado de elevar la base al exponente. 
//Utiliza un ciclo for para realizar la multiplicación.

// Definición de la función calcularPotencia que toma dos números como parámetros: base y exponente
function calcularPotencia(base, exponente){
    // Inicialización de la variable resultadoPotencia en 1, ya que cualquier número elevado a 0 es 1
    let resultadoPotencia = 1;
    // Ciclo for para realizar la multiplicación de la base por sí misma exponente veces
    for (let i = 0; i < exponente; i++){
        // En cada iteración, se multiplica resultadoPotencia por la base
        resultadoPotencia *= base;
    }
    // Devolver el resultado de la potencia
    return resultadoPotencia;
}
// Se definen los valores de la base y el exponente
let base = 3;
let exponente = 3;
// Se llama a la función calcularPotencia con la base y el exponente dados como argumentos y se imprimime el resultado en la consola
console.log(`El resultado de ${base} elevado a ${exponente} es: ${calcularPotencia(base, exponente)}`);

//6-Crea una función llamada contarDigitos que tome un número como parámetro y devuelva la cantidad de dígitos que tiene. 
//Utiliza un ciclo for para contar los dígitos.

// Definición de la función contarDigitos que toma un número como parámetro
function contarDigitos(numeroParametro){
    // Inicialización de la variable cantidadDeDigitos en 0
    let cantidadDeDigitos = 0;
    // Convertir el número en una cadena para poder acceder a su longitud
    let numeroComoCadena = numeroParametro.toString();
    // Ciclo for para iterar sobre cada dígito de la cadena
    for (let i = 0; i<numeroComoCadena.length; i++){
        // En cada iteración, se incrementa la cantidad de dígitos en 1
        cantidadDeDigitos++;
        // Devolver la cantidad total de dígitos
    } return cantidadDeDigitos;
}
// Número de ejemplo para contar sus dígitos
let numeroParametro = 12;
// Llamada a la función contarDigitos con el número de ejemplo como argumento
console.log(`La cantidad de dígitos de ${numeroParametro} es ${contarDigitos(numeroParametro)}`);
//7-Implementa una función llamada reemplazarVocales que tome una cadena de texto como parámetro y devuelva una nueva cadena donde todas las vocales se reemplacen por un guion bajo (_). 
//Utiliza un ciclo for para iterar sobre la cadena original.
function reemplazarVocales(cadenaParametro){ // Se define la función reemplazarVocales que toma una cadena de texto como parámetro
    let nuevaCadena = ""; // Se inicializa una cadena vacía para almacenar la nueva cadena con las vocales reemplazadas.
    for(let i= 0; i<cadenaParametro.length; i++){ // Se inicia un ciclo for para iterar sobre la cadena original.
        let caracterActual = cadenaParametro[i]; // Se obtiene el carácter actual en la posición i de la cadena.
        // Se comprueba si el carácter actual es una vocal (en minúscula) y lo reemplaza por un guion bajo.
        if (caracterActual.toLowerCase() === 'a'|| caracterActual.toLowerCase() === 'e' || caracterActual.toLowerCase() === 'i'|| caracterActual.toLowerCase() === 'o' | caracterActual.toLowerCase() === 'u'){
        nuevaCadena+= '_';    
        } else { // Si el carácter actual no es una vocal, se lo agrega a la nueva cadena sin cambios.
            nuevaCadena += caracterActual;
        }
    }
    return nuevaCadena; // Se devuelve la nueva cadena con las vocales reemplazadas por guiones bajos.
}
let cadenaParametro= "Hola mundo"; // Se define la cadena de texto original.
console.log(reemplazarVocales(cadenaParametro)); // Se Imprime la nueva cadena con las vocales reemplazadas.
//8-Desarrolla una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial. Utiliza un ciclo for para realizar la multiplicación iterativa.
function calcularFactorial(numeroOriginal){ // Se define la función calcularFactorial que toma un numero como parámetro
    let factorial = 1; // Se inicializa el factorial como 1.
    console.log(factorial); // Se imprime el factorial inicial.
    for(let i= 1; i<= numeroOriginal; i++){ // Se inicia un ciclo for desde 1 hasta el número original.
        console.log(i); // Se imprime el valor de i en cada iteración
        factorial *= i; // Se multiplica el factorial por el valor actual de i.
        console.log(factorial); // Se imprime el factorial actualizado en cada iteración.
    } 
    return factorial; // Se devuelve el factorial calculado.
}
let numeroOriginal = 3; // Se define el número del cual se calculará el factorial.
console.log(`El factorial de ${numeroOriginal} es: ${calcularFactorial(numeroOriginal)}`); // Se imprime el resultado del cálculo del factorial.
//9-Escribe una función llamada imprimirPares que tome un número como parámetro e imprima todos los números pares desde 1 hasta ese número utilizando un ciclo for.
function imprimirPares(numeroIngresado){  // Se define la función imprimirPares que toma un numero como parámetro
    for(let i= 1; i <=numeroIngresado; i++){ // Se itera desde 1 hasta el número ingresado.
        if (i % 2 === 0){ // Se verifica si el número actual (i) es par.
        console.log(`el numero ${i} es par `); // Se imprime el número actual si es par.
        }else{
            console.log(`el numero ${i} es impar`); // Se imprime el número actual si es impar.
        }
    }
}

console.log(imprimirPares(8)); // Se llama a la función imprimirPares con el número 8 como parámetro y muestra los resultados.
//10-Crea una función llamada contarLetrasMayusculas que tome una cadena de texto como parámetro y devuelva la cantidad de letras mayúsculas que contiene. 
//Utiliza un ciclo for para recorrer la cadena y un condicional if para verificar si cada carácter es una letra mayúscula.

// Definición de la función contarLetrasMayusculas que toma una cadena de texto como parámetro
function contarLetrasMayusculas(cadenaIngresada){
    // Inicialización de la variable para contar las letras mayúsculas
    cantidadDeMayusculas = 0;
    // Bucle for para iterar sobre cada carácter de la cadena de entrada
    for(let i = 0; i <cadenaIngresada.length; i++){
        // Obtener el carácter actual en la posición i de la cadena ingresada con la función 'charAt()'
        let caracterActual = cadenaIngresada.charAt(i);
        // Verificar si el carácter actual es una letra mayúscula
        // Comparando si es igual a su versión en mayúsculas y diferente de su versión en minúsculas
        if (caracterActual === caracterActual.toUpperCase() && caracterActual !== caracterActual.toLowerCase()) {
            // Si el carácter actual es una letra mayúscula, incrementar el contador
            cantidadDeMayusculas++;
        }
    // Devolver la cantidad total de letras mayúsculas encontradas en la cadena
    } return cantidadDeMayusculas;
}
// Cadena de texto de ejemplo
let cadenaIngresada = "hOLA";
console.log(`La palabra ingresada es: ${cadenaIngresada}`);
// Llamada a la función contarLetrasMayusculas con la cadena de ejemplo y mostrar el resultado
console.log(`La cantidad de mayúsculas de esa palabra es: ${contarLetrasMayusculas(cadenaIngresada)}`);