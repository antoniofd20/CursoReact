import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Obtener la fecha
  const fecha = new Date().getFullYear();

  // Utilizar un componente, sintaxis:
  return (
    <Fragment>
      
      <Header 
        titulo='Tienda Virtual'
      />

      <Footer 
        fecha={fecha}
      />

    </Fragment>
  );
}

export default App;

/**
 *  Siguiente video #6 carpeta 3
 *  https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/srhhUSpb
 */
