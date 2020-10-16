import React, { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spiner from './components/Spiner';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  padding-top: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

const MiNombre = styled.h5`
  font: small-caps bold 100%/200% serif;
  text-align: right;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, guardarCargando ] = useState(false);

  //Extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header
        titulo = 'Cotizador de seguros'
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen = {guardarResumen}
          guardarCargando = {guardarCargando}
        />

        {cargando ? <Spiner/> : null}

        <Resumen
          datos = {datos}
        />

        {!cargando 
        ? 
          <Resultado
            cotizacion = {cotizacion}
          />
        : null }

        
      </ContenedorFormulario>

      <MiNombre>Raymundo Antonio Flores Díaz</MiNombre>
    </Contenedor>
  );
}

export default App;
