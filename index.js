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

let nombre  = 'Jose';
let persona = {
  nombre,
  honorifico: 'Don'
};
console.log(persona);
 */

/**
 * Asignación de métodos
Al igual que es más fácil usar variables en propiedades también se simplificó la forma de definir métodos en un objeto.
let pepito = {
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}
console.log(pepito.saludar({ nombre:'Jose', honorifico:'Don' }));
 */

/**
 * Asignación por descomposición

Si ya dijimos que con ES6 nos es más fácil crear objetos usando variables, también nos vas a ser más fácil hacer lo contrarios, descomponer un objeto (o un array) en variables
// objetos
let persona = {
  nombre: 'Jose',
  honorifico: 'Don'
};

let { nombre, honorifico: titulo } = persona;
console.log(nombre);
console.log(titulo);

// arrays
let fecha    = [24, 4, 2015];
let [d, , y] = fecha;
console.log(d);
console.log(y);

 */

/**
 * Parámetros por defecto

Algo que siempre falto en JS al momento de definir funciones eran los parámetros con valores por defecto, siendo la única forma de lograr esto redefinir el valor de un parámetro con el mismo parámetro o el valor por defecto (no muy optimo que digamos).

Con ES6 ahora es completamente posible definir un valor por defecto a los parámetros de nuestras funciones al igual que en otros lenguajes de programación.

function saludar (nombre, honorifico = 'Don') {
  return `Hola ${honorifico} ${nombre}`;
}
console.log(saludar('Pepito', 'Don'));
console.log(saludar('Jose'));

 */


/**
 * Arrow functions

Arrow function es una nueva forma de definir funciones en JS similar a como hace CoffeeScript.

Hay distintas variantes en la sintaxis de las arrow function.

Función de un solo parámetro
Al crear una arrow function de un solo parámetro no es necesario escribír los paréntesis.

Como se puede ver en el ejemplo tampoco es necesario escribír las llaves siempre. Esto ocurre solo cuando la función es de una sola línea y devuelve un valor.
let sumarUno = x => x + 1;
console.log(sumarUno(23));
 */



/***
 * Función de varios parámetros
En el caso de que queramos utilizar más de un parámetro ahí sí es necesario envolver el nombre de estos entre paréntesis

let sumar = (x, y = 1) => x + y;
console.log(sumar(2, 4));
console.log(sumar(3));
 */


/**
 * Función sin parámetros
También son necesarios los paréntesis si queremos crear una función que no reciba parámetros.
let saludar = () => 'Hola Don Pepito'
console.log(saludar());
 */


/***
 * Función con cuerpo
Por último, si la función tiene más de una línea (o no devuelve ningún valor) es necesario utilizar las llaves.
let saludar = persona => {
  let { nombre, honorifico } = persona;
  let mensaje = `Hola ${honorifico} ${nombre}`;
  return mensaje;
}
console.log(saludar({ nombre: 'Pepito', honorifico: 'Don' }));

 */

/***
 * Parámetros rest

Los parámetros rest son una forma de utilizar parámetros virtualmente infinitos (nunca supe de ningún límite) en una función que vendría a substituír al array arguments que tienen actualmente las funciones.

Los parámetros rest se definen agregando ... adelante del nombre que se le quiera asignar al mismo. El parámetro rest tiene que ser siempre el último parámetro de una función.

function sumar (a, b, ...c) {
  let resultado = a + b;

  c.forEach(n => {
    resultado += n;
  });

  return resultado;
}
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));

 */

/***
 * Promesas

Las promesas es algo que se viene usando ya desde hace un par de años gracias a librerías como Q.

En ES6 las promesas van a pasar a tener soporte nativo del lenguaje con una sintaxis bastante simple.
function obtenerDatos () {
  return new Promise((resolve, reject) => {
    let n = Math.floor(Math.random() * 2) + 1;

    setTimeout(() => {
      if (n === 1) resolve('Datos obtenidos');
      else reject(new Error('Hubo un error al obtener los datos'))
    }, 500);
  });
}

obtenerDatos()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
 */

/***
 * Generadores

Los generadores son un tipo de función especial que permite parar la ejecución de la misma y devolver un valor, para luego poder seguír ejecutándola.
function* datos() {
  let anterior = 0, actual = 1;
  while(true) {
    let temp = anterior;
    anterior = actual;
    actual  += temp;
    yield actual;
  }
}

let valor = datos();

for (let i = 0; i < 5; i++) {
  console.log(valor.next());
}
 */




/**
 * Iterators y for...of

Iterators
Los Iterators son un tipo de objeto que nos permite iterarlos usando el método .next() (los generadores son instancias de Iterator).
let arr  = ['foo','bar','baz'];

let eArr = arr.entries();

console.log(eArr.next());
console.log(eArr.next());
console.log(eArr.next());
console.log(eArr.next());
 */

/**
 * for...of
Este es un nuevo bucle similar a for...in donde la variable que usamos para recorrer un array devuelve el valor de cada elemento y no la posición.

Este bucle sirve perfectamente para recorrer un Iterator.
let arr = ['andres','felipe','naranjo'];

for (let n of arr) {
  console.log(n);
}
 */

/**
 * Proxies

Los proxies de ES6 te permiten interceptar y personalizar las distintas operaciones que se pueden realizar en un objeto.
 
let Jose = {
  nombre: 'Don Jose'
};

let proxy = new Proxy(Jose, {
  get(target, propiedad) {
    let mensaje = `obteniendo ${propiedad}:
${target[propiedad]}`;
    console.log(mensaje);
  }
});

proxy.nombre;
*/

/***
 * Clases

Desde ES6 se incorporan al lenguaje clases para poder hacer POO más facilmente (sin prototype). Las clases de ES6 son solo un syntax sugar de la como se hace actualmente con prototype.

Definición de clase
Para definir una clase simplemente se usa la palabra class seguida del nombre de la clase y luego entre llaves los métodos de esta.
class Persona{
  constructor(nombre) {
    this.honorifico = 'Don';
    this.nombre = nombre;
  }
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}

let Pepito = new Persona('Pepito');
let Jose   = new Persona('Jose');

console.log(Jose.saludar(Pepito));
console.log(Pepito.saludar(Jose));

 */


/**
 * Extendiendo una clase
Al igual que en otros lenguajes es posible extender una clase agregando extends ClaseBase luego del nombre de la nueva clase.
class persona {
  constructor(apellido) {
    this.apellido = apellido;
  }

  ahorro() {
    return 'mi ahorro'
  };
}
class asociado extends persona {
  constructor(nombre) {
    super('asociado');
    this.nombre = nombre;
  }

  ahorro() {
    return `${this.nombre} este es ${super.ahorro()}`;
  }
}
let asociadonuevo = new asociado('asociadonuevo');
console.log(asociadonuevo.ahorro());
 */

/***
 * Métodos estáticos
También es posible definir métodos estáticos que se pueden ejecutar sin necesidad de instanciar la clase simplemente agregando static antes del nombre del método (el método constructor no puede ser estático).
class calculadora {
  static sumar(...numeros) {
    let resultado = 0;

    numeros.forEach(numero => {
      resultado += numero;
    });

    return resultado;
  }
}

console.log(calculadora.sumar(1,2,3));
 */

/**
 * Getters y Setters
Por último también es posible definir getter y setters agregando get o set antes del nombre de un método

class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevo) {
    this._nombre = nuevo;
  }
}

let Pepito = new Persona('Pepito');
console.log(Pepito.nombre);
Pepito.nombre = 'Don Pepito';
console.log(Pepito.nombre);
*/

/***
 * 
 * Módulos

Desde ES6 vamos a tener un sistema nativo de módulos que viene a sustituir a los actuales CommonJS, AMD, etc.

Hay varias formas de exportar e importar módulos con el nuevo sistema.

Exportación única
La primera forma es cuando tenemos un solo dato a exportar (una función, un objeto, etc.), para esto usamos la siguiente sintaxis.
 */

class Persona {
  constructor(nombre) {
    this.honorifico = 'Don';
    this.nombre     = nombre;
  }
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}

export default Persona;



















































