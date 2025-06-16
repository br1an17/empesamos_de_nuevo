// Tu misión:
// Creá un array con 10 números que representen los precios de los productos.
// Utilizá un método de array para calcular el precio con IVA incluido para cada valor.
// Matías te desafía a usar template literals para estructurar tu salida de esta forma:
// El precio es: ${valor}.- IVA incluido.
// Imprimí cada precio ajustado en la consola siguiendo este formato. Cada mensaje debe ser claro y profesional, como si estuvieras preparando un reporte para el cliente.
const precios = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const IVA = 0.21;

precios.forEach(precio => {
    const precioFinal = precio * (1 + IVA);
    console.log(`El precio es: ${parseFloat(precioFinal.toFixed(6))} -IVA incluido.`);
});