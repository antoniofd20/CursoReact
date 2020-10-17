import React, { useState, useEffect } from 'react';

import Frase from './components/Frase';

import styled from '@emotion/styled';

const Contenedor = styled.div`
margin-top: 5rem;
  display: flex;
  align-items: center;
  padding-top: 8rem;
  flex-direction:column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35, #007d35, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem; 
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // State de frases
  const [ frase, guardarFrase ] = useState({});

  // Consultamos la API
  const consultarAPI = async () => {
    /*
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = api.then(respuesta => respuesta.json());
    frase.then(resultado => console.log(resultado));
    */
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  // Cargar una frase 
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Frase
        frase = {frase}
      />
        
      <Boton
        onClick = { consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
