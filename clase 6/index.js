const URL ="https://rickandmortyapi.com/api"

async function traerPersonajes() {
  const res = await fetch(`${URL}`);
  const data = await res.json();
  console.log(data);
}
traerPersonajes()