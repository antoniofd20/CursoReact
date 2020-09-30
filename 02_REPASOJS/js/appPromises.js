// Promises

//const aplicarDescuento = new Promise((resolve, reject) => {
//    setTimeout( () => {
//        let descuento = true;
//
//        if(descuento) {
//            resolve('Descuento aplicado');
//        }else {
//            reject('No se pudo aplicar el descuento')
//        }
//    }, 1000);
//});

//aplicarDescuento.then (resultado => {
//    console.log(resultado);
//});

//
const descargarUsuarios = (cantidad) => new Promise((resolve, reject) => {
    // Pasar la cantidad a mi api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado a ajax
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional
    xhr.oneror = (error) => reject(eror);

    // send
    xhr.send();
});

// Numero de usuarios que queremos
descargarUsuarios(20)
    .then(
        // Llamamos a la funcion que va a mostrar a los miebros en html
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    );

// Funcion para imprimir en el html
function imprimirHTML(usuarios) {
    let html = '';
    // For que recorre a todos los usuarios de nuestro arreglo
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>
        `;
    });

    // Esta estrucctura siempre es igual
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}
/** Proximo video => 20
 * 
 *  https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/RyolVQrA
 */