// 1. Si el comando es GET, imprime por consola el mensaje:
// Toma un dato

// 2.  Si el comando es POST {data}, imprime por consola el mensaje:
// Recibimos {data} satisfactoriamente

// 3.  Si el comando es PUT {id}, imprime por consola el mensaje:
// Modificamos el item con id: {id} satisfactoriamente

// 4.  Si el comando es DELETE {id}, imprime por consola el mensaje:
// El item con el id: {id} se eliminó con éxito


const procrsess = require('process');

procrsess.argv.forEach((arg, index) => {
  if (arg === 'GET') {
    console.log('Toma un dato');
  } else if (arg.startsWith('POST')) {
    const data = arg.split(' ')[1];
    console.log(`Recibimos ${data} satisfactoriamente`);
  } else if (arg.startsWith('PUT')) {
    const id = arg.split(' ')[1];
    console.log(`Modificamos el item con id: ${id} satisfactoriamente`);
  } else if (arg.startsWith('DELETE')) {
    const id = arg.split(' ')[1];
    console.log(`El item con el id: ${id} se eliminó con éxito`);
  }else if (index >= 2) {
  console.log(`Comando no reconocido: ${arg}`);
}
});