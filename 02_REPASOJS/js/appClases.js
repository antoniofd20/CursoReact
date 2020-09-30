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

// Crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');

// Mandamos a llamar al objeto.metodo()
console.log(tarea1.mostrar());

/** Proximo video => 22
 * 
 *  https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/RyolVQrA
 */