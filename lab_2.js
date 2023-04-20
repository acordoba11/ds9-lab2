// Pregunta 2
var num1 = 8;
var num2 = 2;

console.log( num1 + num2 );
console.log( num1 - num2 );
console.log( num1 * num2 );
console.log( num1 / num2 );

// Pregunta 3
let llave = "Edad: ";
let valor = 31;
console.log( llave + valor );

// Pregunta 4
const universidad = "UTP";
const matriculado = true;
console.log( typeof(universidad) );
console.log( typeof(matriculado) );

// Pregunta 5
const producto = {
    id: 25,
    categoria: "herrajes",
    activo: true,
    especificaciones: {},
}

// Pregunta 6
const sumarMultiplos = (num) => {
    if( !Number.isInteger(num) || num < 0 )
        return console.log("El número no es válido.");

    let suma = 0;
    for( i = num - 1; i > 0; i-- ) {
        if( i % 5 === 0 || i % 3 === 0 )
            suma += i;
    }
    return console.log(suma);
}
sumarMultiplos(5.6);
sumarMultiplos(-10);
sumarMultiplos(10);
