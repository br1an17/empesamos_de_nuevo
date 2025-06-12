// Misión 1:

// Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes.

// Con las herramientas then, catch y finally, procesa la respuesta y devuelve por consola un array con los primeros 5 resultados de los 20 personajes recibidos.

// Misión 2:

// Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con async y await para consumir la API.

// Asegúrate de manejar errores correctamente con un bloque try/catch.

const URL = "https://rickandmortyapi.com/api";

// mosion 1 =

const traerMorty = () => {
  fetch(`${URL}/characters`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results.slice(0, 5));
    })
    .catch((error) => {
      console.error("Error al traer la data:", error);
    })
    .finally(() => {
      console.log("funcion completa.");
    });
};
traerMorty();
// mision 2=

async function traerPersonajes() {
try {
  await fetch(`${URL}/character`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results.slice(0, 5));
  });  
} catch (error) {
  console.error("Error al traer la data:", error);
  
}

};
traerPersonajes();
