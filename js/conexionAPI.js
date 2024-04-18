const ApiURL = 'http://localhost:3001/items'

async function itemsList() {
  const connection = await fetch(ApiURL)
	const convertConnection = connection.json()

	return convertConnection
}

console.log(itemsList());

export const conexionAPI = {
	itemsList
}