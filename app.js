/*
function suma(num1,num2){
    return num1 + num2 
}

function resta(num1,num2){
    return num1 - num2 
}

function multiplicacion(num1,num2){
    return num1 * num2 
}

function division(num1,num2){
    return num2 > 0 ? num1 /num2 : 0 
}

function calculadora(cuenta,num1,num2){
    return  cuenta(num1,num2)
}

console.log(calculadora(suma,1,2))
console.log(calculadora(resta,1,2))
console.log(calculadora(multiplicacion,1,2))
console.log(calculadora(division,1,2))

*/

/**
 * callback asincróno
var id = 10

obtenerdatos(id,function(item){
    console.log("el nombre es :" + item.nombre)    
})

function obtenerdatos(id,fn){
    setTimeout(function(){
        fn({nombre:"andres","apellido":"naranjo"})
    },5000)
}

console.log('se ejecuta antes')

var id = document.getElementById("button")

id.addEventListener('click',function(ev){
    console.log('dio clic')
})
 */


/***
 * class es5
 */

var persona = function persona(nombre, tipo) {
	this.nombre =nombre 
	this.tipo = tipo;
}

var Persona = new persona('andres','a')
var Persona2 = new persona('mario','b')

persona.prototype.edad = function(valor){
    return valor 
}

Persona.edad = 20
console.log(Persona2.edad)
console.log(Persona.edad)
























