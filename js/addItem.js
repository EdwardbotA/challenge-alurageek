import { conexionAPI } from "./conexionAPI.js";
import showItems from "./showItems.js";
import cleanInputs from "./cleanInputs.js";

const form = document.querySelector("[data-form]");

async function addItem(e) {
  e.preventDefault();
  const itemName = document.querySelector("[data-name]").value;
  const itemPrice = document.querySelector("[data-price]").value;
  const itemImage = document.querySelector("[data-url]").value;

  const itemId = crypto.randomUUID();

  try {
    await conexionAPI.sendItem(itemName, itemPrice, itemId, itemImage);
    cleanInputs();
    showItems();
  } catch (error) {
    alert(error);
  }
}

form.addEventListener("submit", (e) => addItem(e));