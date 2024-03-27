/*62- Define una función llamada invierteCadena que tome una cadena de texto como 
argumento y retorne una nueva cadena con los caracteres en orden inverso.*/
function invierteCadena (cadena){
    // Primero, se divide la cadena en un arreglo de caracteres usando split('')
    // Luego, se invierte el orden del arreglo usando reverse()
    // Finalmente, se unen los caracteres invertidos en una nueva cadena usando join('')
    return cadena.split('').reverse().join('');
}
let textoOriginal = "JavaScript";
let textoInvertido = invierteCadena (textoOriginal);
console.log("Texto original:", textoOriginal);
console.log("Texto invertido:", textoInvertido);

/*63- Crea una función llamada calcularFactorial que tome un número entero positivo como 
argumento y retorne su factorial. El factorial de un número es el producto de todos los 
números enteros positivos desde 1 hasta ese número.*/
// 5! = 1 * 2 * 3 * 4 * 5 =120
// 1! = 1
// 0! = 1

//Se define una función llamada calcularFactorial que toma un parámetro n. Esta función calculará el factorial de n.
function calcularFactorial (n){
//La función verifica si n es igual a 0. Si es así, retorna 1, ya que el factorial de 0 es 1.
    if (n === 0){
    return 1;
//Si n no es 0, la función se llama a sí misma con el argumento n-1 y multiplica el resultado por n. Esto es parte del enfoque recursivo para calcular el factorial. La función se llama repetidamente y se decrementa hasta que n llega a 0.
    }else{
    return n * calcularFactorial (n-1);
    }
}
//Cuando n alcanza 0, temina la recursión y las llamadas recursivas retornan. Cada llamada recursiva multiplica el valor de n por el resultado de la llamada recursiva anterior, lo que lleva al cálculo del factorial de n.
//Se llama a console.log con el resultado de calcularFactorial(8). Esto imprime el resultado del factorial de 8 en la consola.
console.log(calcularFactorial(8)); //40320

// ej de factorial de 5
// n = 5 -> 5 * 24 = 120
//   n = 4 -> 4 * 6
//     n = 3 -> 3 * 2
//       n = 2 -> 2 * 1
//         n = 1 -> 1 * 1
//          n = 0 -> 1

/*64- Escribe una función llamada contarPalabras que tome una cadena de texto como 
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están 
separadas por espacios.*/
function contarPalabras (cadena){
    // Eliminar espacios en blanco al principio y al final de la cadena
    cadena = cadena.replace(/^\s*|\s*$/gi, '');
    // Reemplazar múltiples espacios con uno solo
    cadena = cadena.replace(/[ ]{2,}/gi, ' ');
    // Eliminar espacios al inicio de una nueva línea
    cadena = cadena.replace(/\n /, '\n');
    // Imprimir la cadena después de la limpieza de espacios
    console.log(cadena);
    // Dividir la cadena por espacios en blanco y contar las palabras
    return cadena.split(' ').length;
}

let texto = 'Hola soy Sofi';
// Imprimir la cadena original
console.log(texto);
// Imprimir la longitud de la cadena original
console.log(texto.length);

console.log();
// Llamar a la función contarPalabras con la cadena de texto
let resultado = contarPalabras(texto);
// Imprimir el número de palabras
console.log(resultado);
/*65- Define una función llamada esPangrama que tome una cadena de texto como 
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas 
las letras del alfabeto al menos una vez.*/
let frase = "Mi tortuga come lechuga";
let abecedario = "abcdefghijklmnñopqrstuvwxyz"

function esPangrama(frase){
    //Eliminar los espacios de la frase
    frase = frase.toLowerCase().replace(/\s+/g, "");

    //Recorrer cada letra del abecedario
    for(let letra of 'abcdefghijklmnñopqrstuvwxyz'){
        //Verificar si la letra está presente en la frase
        if (!frase.includes(letra)){
            //Si alguna letra no coincide, retornar false
            return false;
        }
    }

    //Si todas las letras del abecedario coinciden con las de la frase, retornar true
    return true;
}

let resultadoPangrama = esPangrama (frase);
console.log(resultadoPangrama);
/*66- Crea una función llamada sumaDigitos que tome un número entero como argumento y 
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar 
6 (1 + 2 + 3).*/
let numeroEntero = 123;
function sumaDigitos(numeroEntero){
    let suma = 0; //guardará la suma de los dígitos
    while (numeroEntero > 0){ //se ejecuta mientras el número entero sea > 0
        suma+= numeroEntero % 10; //en cada iteración del bucle, se obtiene el último dígito del numero entero con % 10
        numeroEntero = Math.floor(numeroEntero / 10); // después de obtener el último, elimina el último dígito
    }
    return suma; //devuelve la variable suma que contiene la suma de los dígitos (3 + 2 + 1)
}
console.log(`La suma de los dígitos del numero entero es ${sumaDigitos(numeroEntero)}`); //se llama a la función 'sumaDigitos' con 'numeroEntero´como su argumento y se muestra el resulado en al consola
/*67- Escribe una función llamada calcularPotencia que tome dos números como 
argumento, base y exponente, y retorne el resultado de elevar la base al exponente.*/

// a ^ b | a ** b : a elevado a la b
function calcularPotencia(base , exponente){ //Declarar función 'calcularPotencia' que toma dos parámetros 'base' y exponente'
    if(typeof base !== 'number' || typeof exponente !== 'number'){ //Verificar si los parámetros base y exponente son números
        console.log('Ambos parámetros deben ser números'); //Mostrar mensaje de error
        return; //Salir de la función y evitar que la función se siga ejecutando con parámetros incorrectos
    }


   let resultado = base ** exponente; // Calcular potencia con **, elevando la base al exponente
   return resultado; //Devolver el resultado
}

let base = 3;
let exponente = 3;
console.log(`${base} elevado a ${exponente} da como resultado ${calcularPotencia(base , exponente)}`);

/*68- Define una función llamada esPalindromo que tome una cadena de texto como 
argumento y determine si es un palíndromo. Un palíndromo es una palabra o frase que se 
lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios y signos de 
puntuación.*/

function esPalindromo(cadenaDeTexto){ //Inicio de la función, donde cadenaDeTexto toma el valor "nolocasesacolon" que se pasó como argumento
    let array = cadenaDeTexto.split (""); // Convertir la cadena de texto en un array de caracteres
    let reverse = array.reverse(); // Invertir el orden de los elementos en el array
    return cadenaDeTexto == reverse.join("") ? "Es palíndromo" : "No es palíndromo" // Comparar la cadena original con la cadena invertida y devolver el resultado
}

console.log(esPalindromo("nolocasesacolon")); //Llamar a la función esPalindromo con el argumento 'nolocasesacolon' para verificar si esa cadena es un palindromo.