import React, { Fragment } from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <h1>Administardor de pacientes</h1>

      <div className = "container">
        <div className = "row">
          <div className = "one-half column">
            <Formulario/>
          </div>
          <div className = "one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

/** Proximo video #7 carpeta 5
 *  https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/cvp1RY6a
 */
