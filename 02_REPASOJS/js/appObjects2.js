// Object literal enhancement

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of puppets', 'Seek & Destroy', 'Enter sadman'];

// Forma anterior
const metallica = {
    banda : banda,
    genero : genero,
    canciones : canciones
};
console.log(metallica);

const metallicaDos = {banda, genero, canciones};
console.log(metallicaDos);

// Métodos o funciones en un objeto

const persona = {
    nombre: 'Antonio',
    trabajo: 'Desarrollador Web',
    edad: 21,
    musicaRock: true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

persona.mostrarInformacion();