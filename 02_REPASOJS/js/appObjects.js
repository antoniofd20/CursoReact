// objetos

// Object literal
// perosna1, persona2, persona3... etc
const persona = {
    nombre: 'Raymundo',
    profesion: 'Desarrollador Web',
    edad: 21
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad)

// Object constructor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// Agregar prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

// Crear una nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

// Proximo video# 12 carpeta 2
// https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/RyolVQrA