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
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
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

descargarUsuarios(20)
    .then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )

/** Proximo video => 20
 * 
 *  https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/RyolVQrA
 */