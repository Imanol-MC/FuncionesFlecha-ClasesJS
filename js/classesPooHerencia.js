// Classes


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    precioProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    isbnProducto() {
        return `${this.nombre} y su ISBN es ${this.isbn}`;
    }
}

var recolectarDatos = () =>{
    var nombre = document.getElementById("nombre").value;
    var pre = document.getElementById("precio");
    var precio = parseInt(pre.value);
    var isbn = document.getElementById("isbn").value;

    const libro = new Libro(nombre,precio,isbn);

    alert(libro.isbnProducto());
    alert(libro.precioProducto());
    // console.log(libro.isbnProducto() );
    // console.log(libro.precioProducto());

}
var botonFormulario = document.getElementById('btn');
botonFormulario.addEventListener("click",recolectarDatos);


