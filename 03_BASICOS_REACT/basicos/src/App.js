import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/producto';
import Carrito from './components/Carrito';

function App() {
  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    // Todo lo que esta aquí dentro es parte del state
    { id: 1, nombre: 'Camisa ReactJS', precio:50 },
    { id: 2, nombre: 'Camisa VueJs', precio:40 },
    { id: 3, nombre: 'Camisa Node.JS', precio:30 },
    { id: 4, nombre: 'Camisa Angular', precio:20 },
  ]);

  // State para un carrito de compras
  const [carrito, agregarProducto ] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  // Utilizar un componente, sintaxis:
  // se agregan props a los componentes
  return (
    <Fragment>
      
      <Header 
        titulo='Tienda Virtual'
      />

      <h1> Lista de productos </h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto = {producto}
          carrito = {carrito}
          productos = {productos}
          agregarProducto = {agregarProducto}
        />
      ))}

      <Carrito 
        carrito = {carrito}
        agregarProducto = {agregarProducto} 
      />

      <Footer 
        fecha={fecha}
      />

    </Fragment>
  );
}

export default App;

/**
 *  Siguiente video #11 carpeta 3
 *  https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/srhhUSpb
 */
