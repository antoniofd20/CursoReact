import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  // Definir el state
  const [presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarResrante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);

  return (
    <div className = "container">
      <header>
        <h1>Gasto semanal</h1>

        <div className = "contenido-principal contenido">

        { mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto = {guardarPresupuesto}
              guardarResrante = {guardarResrante}
              actualizarPregunta = {actualizarPregunta}
            />
          ) : (
            <div className = "row">
              <div className = "one-half column">
                <Formulario/>
              </div>
              <div className = "one-half column">
                2
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

/** Proximo video #10 carpeta 6
 *  link https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/1v4XkKST
 */