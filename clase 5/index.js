const comando = process.argv[2];

const comandoIngresado = (comando) => {
  if (comando == "get") {
    console.log("Toma un dato");
  }
  else if (comando == "post") {
    console.log("Recibimos {data} satisfactoriamente");
  }
  else if (comando == "put") {
    console.log("Modificamos el item con id: {id} satisfactoriamente");
  }
  else if (comando == "delete") {
    console.log("El item con el id: {id} se eliminó con éxito");
  } else
    console.log(
      "Comando no reconocido, por favor ingrese get, post, put o delete"
    );
};
comandoIngresado(comando);
