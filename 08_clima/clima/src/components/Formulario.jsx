import React, { useState } from 'react'

const Formulario = ({busqueda, guardarBusqueda, guardarConsulta}) => {

    // State del formulario
    const [ error, guardarError ] = useState(false);

    // Extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    // Función que coloca los elementos en el satate
    const handleChange = e => {
        
        // Actualizar el estate
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : [e.target.value]
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if(ciudad.length === 0 || pais.length === 0){
            guardarError(true);
            return;
        }

        guardarError(false)

        // Pasarlo al componente principal
        guardarConsulta(true);
    }

    return (
        <form
            onSubmit = {handleSubmit}
        >
            {error 
            ? <p className = "red darken-4 error">Todos los campos son obligatorios</p>
            : null }
            <div className = "input-field col s12">
                <input 
                    type = "text"
                    name = "ciudad"
                    id = "ciudad"
                    value = {ciudad}
                    onChange = {handleChange}
                />
                <label htmlFor = "ciudad">Ciudad:</label>
            </div>

            <div className = "input-field col s12">
                <select
                    name = "pais"
                    id = "pais"
                    value = {pais}
                    onChange = {handleChange}
                >
                    <option value=""> -- Seleccione un país -- </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor = "pais">País:</label>
            </div>
            <div className = "input-field col s12">
                    <input 
                        type = "submit"
                        value = "Buscar clima"
                        className = "waves-effect waves-light btn-large btn-block yellow accent-4"
                    />
            </div>
        </form>
    );
}
 
export default Formulario;