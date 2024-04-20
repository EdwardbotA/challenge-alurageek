import { conexionAPI } from "./conexionAPI.js";

const listOfItems = document.querySelector('[data-list]')

listOfItems.addEventListener('click', async (e) => {
  e.preventDefault()

  const itemId = e.target.parentElement.parentElement.parentElement.dataset.id
  
  if (e.target.nodeName === 'IMG' && e.target.dataset.remove) {
    // console.log('hola');
    await conexionAPI.deleteItem(itemId)
  }
})