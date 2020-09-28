// Creando funciones

// Declaracion de función:
// No importa si la mandas a llamar antes de declararla

function saludar( nombre ){
    console.log('Bienvenido ' + nombre);
}

saludar('Raymundo');
saludar('Antonio')

// function expression
// Tienes que declararla antes de llamarla.

const cliente = function( nombreCliente ){
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Toño');

/* Parametros por default en funciones `*/

function actividad(nombre = 'Raymundo', actividad = 'Estudiar programación'){
    console.log(`La persona ${nombre}, esta realizando
    la actividad ${actividad}`);
}

actividad('Antonio', 'aprender JavaScript');
actividad('Itzel', 'Cocinando');
actividad(); // Se utilizan los valores por default

// function expression

const actividad2 = function(nombre = 'Raymundo', actividad = 'Estudiar programación'){
    console.log(`La persona ${nombre}, esta realizando
    la actividad ${actividad}`);
}

console.log('********* function expression **********')
actividad2('Antonio', 'aprender JavaScript');
actividad2('Itzel', 'Cocinando');
actividad2(); // Se utilizan los valores por default

// Arrow function

console.log('*****Arrow function *******')
/*
let viajando = (destino) => {
    return `Viajando a la ciudad de: ${destino}`;
}
*/

/* Forma de optimizar el código: */
let viajando = (destino) => `Viajando a la ciudad de: ${destino}`;

let viaje = viajando('Barcelona');

console.log(viaje);