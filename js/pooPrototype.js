/** Object Literal */
const articulo = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}


function Articulo(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Articulo.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const articulo1 = new Producto('Monitor Curvo de 49"', 800);
const articulo2 = new Producto('Laptop', 300);
const cliente = new Cliente('Juan', 'De la torre');


console.log(articulo1);
console.log(articulo1.formatearProducto() );
console.log(articulo2.formatearProducto() );

