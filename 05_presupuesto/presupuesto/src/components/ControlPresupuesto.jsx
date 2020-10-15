import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {

    // Mostrar mensaje si es que el restante es negativo
    let mensaje = '';
    console.log(restante);

    if(restante > 0) {
        mensaje = ('Restante: $ '+ restante);
    } else {
        mensaje = 'No cuentas con dinero suficiente para este gasto';
    }


    return (
        <Fragment>
            <div className = "alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className = {revisarPresupuesto(presupuesto, restante)}>
                {mensaje}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}
 
export default ControlPresupuesto;