/**
 * variables de bloque
 * En ES6 se agrega una nueva forma de definir variables usando la palabra let en vez de var.
   Se diferencia de var en que el scope de una variable definida con let es el bloque en el cual se encuentra la variable y no la función

for (let i = 0; i < 5; i++) {
  console.log(i);
};
console.log(i);
 */

/**
 * Constantes
Algo que sin duda faltaba en JS era las constantes. Con ES6 es posible definir tus propias constantes usando la palabra const en lugar de let o var.

Una constantes como el nombre indica no puede cambiar de valor una vez definida, tiene un valor constante.

Las constantes también tienen un scope de bloque

const DIEZ = 10;
DIEZ = 5;
console.log(DIEZ);

 */

/**
 * template 
 * los template string son una forma más fácil de crear strings con variables en medio del string o strings multilínea.

Variables en strings
Para meter una variable dentro de un template string hay que colocar el nombre de esta variable entre de ${ y } (no solo variables, incluso pueden ejecutar funciones o colocar expresiones como 2+2).

let nombre = 'Don Pepito';
console.log(`Hola ${nombre}`);

 */

/**
 * Strings multilínea
Para poder crear un string multilínea con template strings basta con apretar enter y en la siguiente línea seguír escribiendo.

let mensaje = `Hola Don Pepito
Hola Don Jose`;
console.log(mensaje);

 */

/**
 * Números en Octal
Desde ES6 va a ser posible definir variables usando números en Octal con el siguiente código
 */

console.log(0o35);























