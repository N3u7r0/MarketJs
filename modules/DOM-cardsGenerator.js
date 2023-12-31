import { productos } from "../../modules/products.js";
//aca solicitamos la informacion que cargamos en la pag Admin.
export let productosStorage = JSON.parse(sessionStorage.getItem("itemStorage"));


export function card(parametroCard) {
  //el operador logico es para que use el parametro( parametroCArd ), o para que simplemente recorrar todo el arrary (productos.tipo),
  //lo mismo con produtosstorage / productos.
  const productosFiltrados = (productosStorage || productos).filter((productos) => productos.tipo == (parametroCard || productos.tipo));
  let divGlobal = document.getElementsByClassName("divCardGlobal")[0];
  for (let item of productosFiltrados) {
    let card = document.createElement("div");
    card.innerHTML = `
             <div  id="carta" class="card text-white bg-dark mb-3" style="max-width: 16rem;">
                <img class="card-img-top" src="${(item.foto)}" alt="foto">
                <div class="card-header">
                    <h7 class="card-title"><strong>${item.marca}</strong></h7>
                    <h7 class="card-title">${item.tipo}</h7>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${item.modelo}</h6>
                    <p class="card-text">${item.descripcion}.</p>
                    <p>stock: (${item.cantidad})</p>
                    <p class="card-text"><strong>Precio: $${item.precio}</strong></p>
                    <hr>
                <div>
                <div class="d-grid gap-2">
                    <button type="button" class="btn btn-primary btn-block"><strong>Comprar</strong></button>
                </div>
             </div>
            `;
    divGlobal.append(card);
  }
}
