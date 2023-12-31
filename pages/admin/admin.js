import { productos } from "../../modules/products.js";
import { resetearFormulario } from "../../modules/DOM-resetForms.js";
import { Producto } from "../../modules/productManager.js";
import { productosStorage } from "../../modules/DOM-cardsGenerator.js";

let errImagen = "../../images/imagesProductList/noImg.jpg"; //==> link de img generica.
let item; // ===> sirve para q no explote el for y la funcion listar prodcuto NO BORRAR!

let tBodyProductos = document.getElementById("tbProductos");
function listarProductos() {
  let nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `
    <td>${item.id}</td>
    <td>${item.tipo}</td>
    <td>${item.marca}</td>
    <td>${item.modelo}</td>
    <td>$${item.precio}</td>
    <td>${item.cantidad}</td>
    `;
  tBodyProductos.appendChild(nuevaFila);
}
//con el for, recorro los productos, y con la funcion listarProductos creo una plantilla y los agrego al DOM.
for (item of productosStorage || productos) {
  listarProductos();
}
function agregarItem() {
  //funcion que responde al boton principal, guardando todos los datos de los inputs.
  item = []; // ==> este array es para limpiar e igualar el "item del for" que recorre la funcion listarProductos.
  item.id = productos.length + 1;
  item.tipo = document.getElementById("inputTipo").value;
  item.marca = document.getElementById("inputFabricante").value;
  item.modelo = document.getElementById("inputModelo").value;
  item.descripcion = document.getElementById("inputDescripcion").value;
  //item.foto = document.getElementById("inputFoto").files[0];  (no funciona xq es para subir el file al servidor y esto se ejecuta de manera local)
  item.precio = parseInt(document.getElementById("inputPrecio").value);
  item.cantidad = parseInt(document.getElementById("inputCantidad").value);
  item.foto = errImagen;
  // .value al final es para extraer el "string" que ingresamos en los inputs.

  // if para uqe no permita crear articulos vacios
  if (
    item.tipo != "" &&
    item.marca != "" &&
    item.nombre != "" &&
    item.precio != "" &&
    item.cantidad != ""
  ) {
    productos.push(
      new Producto(
        item.id,
        item.tipo,
        item.marca,
        item.modelo,
        item.descripcion,
        item.foto,
        item.precio,
        item.cantidad
      )
    );
    listarProductos();
    resetearFormulario(); //=====>aca llame la funcion para borrar el formulario.
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "la operacion se realizo con exito.",
      showConfirmButton: false,
      timer: 2300,
    });
    /////////////////////////LOCAL STORAGE///////////////////////////////
    sessionStorage.setItem("itemStorage", JSON.stringify(productos));
  } else {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      text: "Por favor, complete todos los campos",
      showConfirmButton: false,
      timer: 2300,
    });
  }
}
//boton "agregar producto"
let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", agregarItem);

console.table(productosStorage || productos);
