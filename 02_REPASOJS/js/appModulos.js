/** 
 *  En este archivo estamos importando desde
 *  appClases.js
 */

import {nombreTarea,crearTarea, tareaFinalizada} from './appClases.js';

console.log(nombreTarea);

const tarea1 = crearTarea('Pasear al perro', 'Media');
console.log(tarea1);

tareaFinalizada();