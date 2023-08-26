// 1. Transforma esta declaración de función a una función de expresión. El ejercicio debe
// quedar en un archivo nombrado `1_funcion.js` (1 Punto)

// function example(a, b, c){
// return a+b+c
// }

// Resolución:
const a = "a";
const b = "b";
const c = "c";

const suma = function (a, b, c){
    return a + b + c
};

suma(a, b, c);
console.log(suma);