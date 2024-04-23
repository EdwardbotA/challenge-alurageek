import { conexionAPI } from "./conexionAPI.js";
import showItems from "./showItems.js";

const listOfItems = document.querySelector('[data-list]')

listOfItems.addEventListener('click', async (e) => {
  e.preventDefault()

  const itemId = e.target.dataset.id
  
  if (e.target.nodeName === 'IMG' && e.target.dataset.remove) {
    let itemDeleted = await conexionAPI.deleteItem(itemId)
    showItems()
  }
})