/**
 * Paso necesario para todos los componentes:
 * importar React:
 */

import React from 'react';

function Header({titulo}) {
    // Aquí se puede incluir códio JavaScript

    return(
        // Aquí va todo lo que se va a ver en pantalla

    <h1 className="encabezado">{ titulo }</h1>
    )
}

export default Header;