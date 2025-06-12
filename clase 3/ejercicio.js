const precios = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const iva = 0.18;

for (let i = 0; i < precios.length; i++) {
  const preciosIva = precios[i] * (1 + iva);
  console.log(`el precio es ${preciosIva} con el IVA incluido`);
}
