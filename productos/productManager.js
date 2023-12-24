class Productos {
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

export let productos = [];

productos.push(Productos(0, "smart tv", "samsung", "au7000 65 pulgadas", "resolucion 4k", "", 5));
productos.push(Productos(1, "smart tv", "samsung", "au7000 55 pulgadas", "resolucion 4k", "", 5));
productos.push(Productos(2, "smart tv", "samsung", "au7000 50 pulgadas", "resolucion 4k", "", 5));
productos.push(Productos(3, "smartphone", "samsung", "a04s", "memoria ram:4gb/n memoria rom:128gb /n pulgada: 6.5", "", 5));
productos.push(Productos(4, "smartphone", "samsung", "a34", "memoria ram:6gb/n memoria rom:128gb /n pulgada: 6.5", "", 5));
productos.push(Productos(5, "smartphone", "samsung", "a54", "memoria ram:8gb/n memoria rom:256gb /n pulgada: 6.5", "", 5));
productos.push(Productos(3, "notebook", "asus", "nitro 5", "procesador:ryzen 5/n memoria ram:12gb/n SDD:512gb /n pulgada: 16.5", "", 5));
productos.push(Productos(3, "notebook", "lenovo", "legion 7", "procesador:intel i7/n memoria ram:16gb/n SDD:1tb /n pulgada: 16.5", "", 5));
productos.push(Productos(3, "notebook", "hp", "l1030 La", "procesador:intel celeron/n memoria ram:8gb/n HDD:512gb /n pulgada: 16.5", "", 5));


