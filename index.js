
//Misión:

// Crea un nuevo proyecto con el comando npm init -y para generar un archivo package.json básico.
// Inicializa un repositorio de Git en el proyecto con git init.
// Crea un archivo .gitignore que excluya la carpeta node_modules.
// Configura el archivo package.json para que soporte el estándar de imports ES Modules. Modifica el archivo añadiendo "type": "module".
//  Define un script en package.json para ejecutar el proyecto con Node.js usando "start": "node index.js".

// Misión 2:
// Usa la estructura creada en el ejercicio anterior para iniciar un servidor web.
// Instala Express con npm install express.
// Configura un servidor básico que corra en el puerto 3000 usando Express.
// Agrega una ruta /ping que responda con el texto plano “/pong” cuando sea visitada desde un navegador.

import express from 'express';
const app = express();
const PORT = 3000;
app.get('/ping', (req, res) => {
    res.send('/pong');
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

