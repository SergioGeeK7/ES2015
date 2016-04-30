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

console.log(0o35);
 */

/**
 * Números en Binario
Desde ES6 va a ser posible definir variables usando números en Binario con el siguiente código
console.log(0b1001);
 */


/**
 * Math 
 * En ES6 se agregan una lista de nuevos métodos al objeto Math, casi todos ya están soportados desde hace un par de años en los navegadores.

.acosh()
.asinh()
.atanh()
.cbrt()
.clz32()
.cosh()
.exp1m()
.fround()
.hypot()
.imul()
.log10()
.log1p()
.log2()
.sign()
.sinh()
.tanh()
.trunc()

ver 
https://developer.mozilla.org/en-US/

 */

/**
 * métodos arrays
 * Array.from(array, mapFn)
Este nuevo método del objeto Array permite crear un array copiando otro array o un NodeList.

Es posible utilizarlos actualmente mediantes polyfills.
let arr1 = [1,2,3];
let arr2 = Array.from(arr1, v => --v);
arr2.push(3);
console.log(arr1);
console.log(arr2);
 */

/**
 *Otros métodos
Además de .from() se agregaron los siguientes métodos:

.of(): crea un nuevo array con un número variado de elementos
.fill(): llena un array con un nuevo valor en cada elemento
.find(): busca un elemento dentro de un array y devuelve el valor
.findIndex(): similar a .find() pero devuelve el índice
.entries(): devuelve una instancia del objeto Iterator que contiene cada índice y valor del array
.keys(): similar a .entries() pero el Iterator solo muestra los índices
.copyWithin(): copia los elementos de un array en las posiciones indicadas
 
 */

/**
 * métodos de Object
 * Object.assign(objetivo, ...objs)
Este nuevo método permite asignar propiedades de uno o más objetos a otro objeto pisando las propiedades con nombres repetidos por el valor del último objeto indicado.

Esta propiedad es muy útil para realizar herencia entre objetos.

Este método se puede utilizar ya gracias a un polyfill

let obj1 = {
  prop1: 'valor'
};
let obj2 = {
  prop2: 'otro valor'
};
let obj3 = {
  prop1: 'nuevo valor'
};

let obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);
*/

/**
 * Object.is(valor1, valor2)
Este nuevo método sirve para comparar si dos valores son iguales, devuelve true si ambos son:

undefined
null
true o false
strings con el mismo largo y los mismos caracteres
el mismo objeto
números y ambos:
son mayores a 0
son menores a 0
son NaN
no son 0, no son NaN y son el mismo número
Al igual que .assign() se puede utilizar ya mismo mediante un polyfill.
let obj1 = { nombre: 'valor' }
let obj2 = { nombre: 'valor' };

console.log(Object.is(obj1, obj1));
console.log(Object.is(obj1, obj2));
 */

/**
 * Forma abreviada de definición de objetos 
 * Asignación de propiedades
Con ES6 ahora va a ser mucho más simple (y lógico) utilizar una variable para definir el valor de una propiedad de un objeto.
 */

let nombre  = 'Jose';
let persona = {
  nombre,
  honorifico: 'Don'
};
console.log(persona);








































