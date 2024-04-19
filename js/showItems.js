import { conexionAPI } from "./conexionAPI.js";

const itemsContainer = document.querySelector("[data-list]");

function crearCard(name, price, url, id) {
  const card = document.createElement("div");
  card.classList.add("product__card");
  card.dataset.id = id;

  card.innerHTML = `<img
    class="product__img"
    src="${url}"
  />

  <div class="card-container--info">
    <p>${name}</p>
    <div class="card-container--value">
      <p>$${price}</p>
      <img src="./assets/trash.svg" />
    </div>
  </div>`;

  return card;
}

export default async function showItems() {
  try {
    const itemAPI = await conexionAPI.itemsList();

    itemAPI.forEach((item) => {
      itemsContainer.appendChild(
        crearCard(item.name, item.price, item.image_url, item.id)
      );
    });
  } catch (error) {
    itemsContainer.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`;
  }
}

showItems();