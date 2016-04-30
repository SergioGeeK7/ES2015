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
 */

const DIEZ = 10;
DIEZ = 5;
console.log(DIEZ);

