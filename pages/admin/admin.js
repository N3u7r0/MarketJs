import { productos } from "../../modules/products.js"
import { resetearFormulario } from "../../modules/DOM-resetForms.js"
import { Producto } from "../../modules/productManager.js";

console.log("pagina admin");
console.log(productos)
let tBodyProductos = document.getElementById("tbProductos");

//con el for, recorro los productos, y con la funcion listarProductos creo una plantilla y los agrego al DOM.
for (let item of productos) {
    function listarProductos() {
        let nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML =
            `
        <th scope="row">${(item.id || productos.length)}</th>
        <td>${item.tipo}</td>
        <td>${item.marca}</td>
        <td>${item.modelo}</td>
        <td>$${item.precio}</td>
        <td>${item.cantidad}</td>
        `;
        tBodyProductos.appendChild(nuevaFila);
    }
    listarProductos();
}

//funcion que responde al boton principal, guardando todos los datos de los inputs.
function agregarItem() {
    let item = {};// ==> este array es para guardar e igualar el "item del for" que recorre la funcion listarProductos.
    item.id = productos.length;
    item.tipo = document.getElementById("inputTipo").value;
    item.marca = document.getElementById("inputFabricante").value;
    item.modelo = document.getElementById("inputModelo").value;
    item.descripcion = document.getElementById("inputDescripcion").value
    item.foto = document.getElementById("inputFoto").value
    item.precio = document.getElementById("inputPrecio").value;
    item.cantidad = document.getElementById("inputCantidad").value;
    // .value al final es para extraer lo que ingresamos en los inputs.
    productos.push(new Producto(item.id, item.tipo, item.marca, item.modelo, item.descripcion, item.foto, item.precio, item.cantidad));

    function listarProductos() {
        let nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML =
            `
        <th scope="row">${(item.id || productos.length)}</th>
        <td>${item.tipo}</td>
        <td>${item.marca}</td>
        <td>${item.modelo}</td>
        <td>$${item.precio}</td>
        <td>${item.cantidad}</td>
        `;
        tBodyProductos.appendChild(nuevaFila);
    }

    // if para que no permita crear articulos vacios
    if (item.tipo != "" && item.marca != "" && item.nombre != "" && item.precio != "" && item.cantidad != "") {
        listarProductos();
        resetearFormulario();//=====>aca llame la funcion para borrar el formulario.
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "la operacion se realizo con exito.",
            showConfirmButton: false,
            timer: 2300
        });
    } else {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            text: "Por favor, complete todos los campos",
            showConfirmButton: false,
            timer: 2300
        });
    }
}

//boton "agregar producto"
let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", agregarItem);