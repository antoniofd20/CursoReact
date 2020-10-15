import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Definir el state
  const [presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarResrante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);

  // useEffect que actualiza el restante 
  useEffect(() => {
    if(creargasto){

      // Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarResrante(presupuestoRestante);

      // resetear el false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  const titulo = gastos.length === 0 ? 'No hay gastos aún' : 'Lista de tus gastos';

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
                <Formulario
                  guardarGasto = {guardarGasto}
                  guardarCrearGasto = {guardarCrearGasto}
                />
              </div>
              <div className = "one-half column">
                <h2>{titulo}</h2>
                <Listado
                  gastos = {gastos}
                />
                <ControlPresupuesto
                  presupuesto = {presupuesto}
                  restante = {restante}
                />
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