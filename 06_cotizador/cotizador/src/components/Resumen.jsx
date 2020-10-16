import React from 'react'

import { primerMayuscula } from '../helper';

import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFFFFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // Extaer datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;