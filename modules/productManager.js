export  class Productos {
    constructor(id, tipo, marca, modelo, descripcion, foto, cantidad) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.foto = foto;
        this.cantidad = cantidad;
        this.vendido = false;
    }
}