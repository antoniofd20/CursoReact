import React, { Fragment, useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {

  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });

  const [ consultar, guardarConsulta ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      
      if(consultar){
        const appId = '6b2caed9a8cf11ea5747bf5ee65d63d8';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
      }
    }
    consultarAPI();
    guardarConsulta(false);
  }, [consultar]);

  return (
    <Fragment>
      <Header
        titulo = 'Clima app'
      />
      <div className = "contenedor-form">
        <div className = "container">
          <div className = "row">
            <div className = "col m6 s12">
              <Formulario
                busqueda = {busqueda}
                guardarBusqueda = {guardarBusqueda}
                guardarConsulta = {guardarConsulta}
              />
            </div>
            <div className = "col m6 s12">
              <Clima
                resultado = {resultado}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
