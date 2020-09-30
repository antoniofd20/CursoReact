// Arreglos y .map

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

console.log(carrito);

const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;

// Object keys

const persona = {
    nombre: 'Raymundo',
    profesion: 'Desarrollador Web',
    edad: 500
}

console.log(Object.keys(persona));

// Spread operator ...

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

// Unir los arreglos en uno solo

//let combinacion = lenguajes.concat(frameworks);
let combinacion = [...lenguajes,...frameworks];
console.log(combinacion);

// Obtener el ultimo sin modificar el arreglo
let [ultimo] = [...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo);

// Usando Spread

function suma(a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(...numeros);