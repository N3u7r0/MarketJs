export class Producto {
    constructor(id, tipo, marca, modelo, descripcion, foto, precio, cantidad) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.foto = foto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendido = false;
    }
}