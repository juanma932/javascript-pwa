import "./style.css";
/* Variables Globales */
const listadoProductos = [
    { nombre: 'Carne', cantidad: 2, precio: 32.34 },
    { nombre: 'Leche', cantidad: 4, precio: 12.34 },
    { nombre: 'Pan', cantidad: 5, precio: 2.34 },
    { nombre: 'Fideos', cantidad: 3, precio: 9.34 },
]

function renderLista() {
    let ul = document.createElement('ul');
    ul.innerHTML = ''; // Limpiar antes de renderizar
    listadoProductos.forEach((prod, indice) => {
        ul.innerHTML += `
        <li class="flex items-center justify-between bg-white rounded-lg shadow p-3 mb-2 hover:bg-gray-50 transition">
            <!-- Icono de producto -->
            <span class="flex items-center justify-center w-10 text-indigo-600">
                <i class="material-symbols-outlined text-2xl">shopping_cart</i>
            </span>
            <!-- Nombre de producto -->
            <span class="flex-1 text-gray-800 font-medium truncate w-32">${prod.nombre}</span>
            <!-- Cantidad -->
            <span class="w-24">
                <label for="" class="block text-xs text-gray-500">Cantidad</label>
                <input type="text" value="${prod.cantidad}" class="mt-1 w-full border border-gray-300 rounded-md text-sm p-1 text-center focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            </span>
            <!-- Precio -->
            <span class="w-24">
                <label for="" class="block text-xs text-gray-500">Precio</label>
                <input type="text" value="${prod.precio}" class="mt-1 w-full border border-gray-300 rounded-md text-sm p-1 text-center focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            </span>
            <!-- Borrar producto -->
            <span class="w-12 flex justify-center">
                <button class="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 shadow transition">
                    <i class="material-symbols-outlined">shopping_cart_off</i>
                </button>
            </span>
        </li>
        `;
    });
    document.getElementById('lista').appendChild(ul);
}

function start() {
    renderLista();
}

document.addEventListener('DOMContentLoaded', start);
