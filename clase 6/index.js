// Misión 1:

// Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes.
// Con las herramientas then, catch y finally, procesa la respuesta y devuelve por consola un array con los primeros 5 resultados de los 20 personajes recibidos.

// Misión 2:

// Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con async y await para consumir la API.
// Asegúrate de manejar errores correctamente con un bloque try/catch.

const url = 'https://rickandmortyapi.com/api/character';

// Misión 1: Usando then, catch y finally
fetch(url)      

    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const characters = data.results.slice(0, 5);
        console.log(characters);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    }   )
    .finally(() => {        
        console.log('Fetch attempt finished.');
    });         