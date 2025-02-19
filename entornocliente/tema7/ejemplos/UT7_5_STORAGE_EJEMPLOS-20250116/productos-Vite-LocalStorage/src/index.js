import { ProductoService } from "./producto-service.js";

const productoService = new ProductoService();

const productTemplate = document.getElementById("productTemplate");
const tbody = document.querySelector("#products tbody");


async function getProductos() {
    const productos = await productoService.getProductos();
    productos.forEach(showProducto);
}

async function showProducto(producto) {
    const clone = productTemplate.content.cloneNode(true);
    const tr = clone.children[0];
    tr.querySelector("img").src = producto.photo;
    tr.children[1].textContent = producto.name;
    tr.children[2].textContent = producto.description;
    tr.querySelector("button.delete").addEventListener("click", async () => {
        productoService.delete(producto); 
        tr.remove();
    });
    tbody.append(tr);
}

getProductos();

