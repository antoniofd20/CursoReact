//   **********************************
//   ********** Variables *************
//   **********************************

console.log("Variables con JavaScrpt:");

// Crear variables con var.

console.log("------var----------")
var aprendiendo;
aprendiendo = 'JavaScript';
console.log(aprendiendo);

// Variables con const (forma nueva).
// Siempre debe de tener un valor de inicio.
// El valor siempre es el mismo, no cambia.

console.log("------const--------")
const variableConstante = 'Esto es una variable const';
console.log(variableConstante)

// Variables con let
// Si puede cambiar

console.log("-------let--------")
let varLet = true;
varLet = 5;
console.log(varLet)

// Scope (ejemplo)

console.log("--- Scope ejemplo ---")
var musica = 'Rock';

if(musica) {
    var musica = 'Grunge';
    console.log('Dentro del if: ', musica);
}

console.log('fuera del if: ', musica)

// Scope con let

console.log("----- Scope/let ----")
let musica2 = 'Rock';

if(musica) {
    let musica2 = 'Grunge';
    console.log('Dentro del if: ', musica2);
}

console.log('fuera del if: ', musica2)

//   **********************************
//   ******* Template String **********
//   **********************************

const nombre = 'Antonio';
const trabajo = 'Desarrollador web';

// Concatenar JavaScript

console.log('Nombre: ' + nombre + ' Trabajo: ' + trabajo)
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Concatenar con varias lineas
const contenedorApp = document.querySelector('#app');
let html = '<ul>' + 
                '<li> Nombre ' + nombre + '</li>' + 
                '<li> Trabajo ' + trabajo + '</li>' + 
            '</ul>';

// contenedorApp.innerHTML = html;

let html2 = `
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Trabajo: ${trabajo}</li>
        </ul>
    `;

contenedorApp.innerHTML = html2;


// Proximo video# 6 carpeta 2
// https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/RyolVQrA