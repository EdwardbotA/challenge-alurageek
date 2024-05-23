const ApiURL = "http://localhost:3001/items";

async function itemsList() {
  const connection = await fetch(ApiURL);
  const convertConnection = connection.json();

  return convertConnection;
}

async function sendItem(name, price, id, url) {
  const connection = await fetch(ApiURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      id: id,
      image_url: url,
    }),
  });

  const convertConnection = connection.json();

  if (!connection.ok) {
    throw new Error("Ha ocurrido un error al enviar el producto");
  }

  return convertConnection;
}

async function deleteItem(id) {
  const connection = await fetch(`${ApiURL}/${id}`, {
    method: "DELETE",
  });
  const convertConnection = connection.json();

  if (!connection.ok) {
    throw new Error("No se ha podido eliminar el producto");
  }
  
  return convertConnection;
}

export const conexionAPI = {
  itemsList,
  sendItem,
  deleteItem,
};
