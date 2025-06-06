const precios = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const iva = 0.18;

const preciosIva = precios.map((precio) => precio * (1 + iva));

console.log(preciosIva);
