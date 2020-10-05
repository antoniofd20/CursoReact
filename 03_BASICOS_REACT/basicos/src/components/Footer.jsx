import React from 'react';

// Escribir sfc para una función.
// Si no se necesita código js se pueden omitir las llaves y el return.
// También cuenta con un prop {fecha}
const Footer = ({fecha}) => ( 
<p>Todos los rderechos reservados &copy; { fecha }</p>
);
 
export default Footer;