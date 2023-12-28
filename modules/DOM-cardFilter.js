import { productos } from "../../modules/products.js";

export function cardFilter() {
    let divGlobal = document.getElementsByClassName("divGlobal")[0];
    const productosFiltrados = productos.filter(x => x.tipo == "notebook");
    for (let item of productosFiltrados) {
        let card = document.createElement("div");
        card.innerHTML =
            `
             <div  id="carta" class="card text-white bg-dark mb-3" style="max-width: 16rem;">
                <img class="card-img-top" src="${item.foto}" alt="foto">
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
        divGlobal.append(card)
        console.log(divGlobal);
    }
}