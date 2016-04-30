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