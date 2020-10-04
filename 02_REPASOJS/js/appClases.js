// Exportar Strings
/*
const nombreTarea = 'Pasear al perro';
const nuevaTarea = 'Esta es una nueva tarea';
export default {
    nombreTarea: nombreTarea,
    nuevaTarea: nuevaTarea
}
*/

export const nombreTarea = 'Pasear al perro';

// Exportar funciones
export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgenica de ${urgencia}`;
}

export const tareaFinalizada = () => {
    console.log('La tarea se realizo con exito');
}

// Escribir clases
class Tarea {
    /** El constructor es de donde van a surguir
     *  los objetos
     */
    constructor(nombre, prioridad) {
        /** Para que los atributos sean parte del
         *  objeto se pasan con this
         */
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    /** Los metodos son funciones dentro de las clses */
    mostrar() {
        return `${this.nombre} tiene una prioridad de: ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea {
    constructor (nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        super.mostrar();
        console.log(`y la cantidad es de: ${this.cantidad}`);
    }
}

// Crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');

// Mandamos a llamar al objeto.metodo()
console.log(tarea1.mostrar());

// Compras
let compra1 = new ComprasPendientes('jabon', 'urgente', 3)
compra1.mostrar();

/** Proximo video => 22
 * 
 *  https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/RyolVQrA
 */