const autos = [
  { marca: "chevrolet", modelo: "prisma", anio: 2019, color: "gris - perlado" },
  { marca: "chevrolet", modelo: "sport", anio: 2011, color: "gris" },
  { marca: "chevrolet", modelo: "aveo", anio: 2014, color: "azul" },
  { marca: "renault", modelo: "Clio", anio: 2016, color: "negro" },
  { marca: "renault shanelle", modelo: "logan", anio: 2013, color: "azul - noche" },
  { marca: "wolfvagen", modelo: "amarok", anio: 2010, color: "negro" },
  { marca: "wolfvagen", modelo: "golf", anio: 2024, color: "rojo" },
  { marca: "ferrary", modelo: "sport-611", anio: 1996, color: "rojo" },
  { marca: "ford", modelo: "ka", anio: 2013, color: "violeta" },
  { marca: "ford", modelo: "ranger", anio: 2019, color: "blanco" },
];

austosNuevos = autos.filter((auto) => auto.anio > 2018);
console.log(austosNuevos);

const comprobarColor = (tono) => {
  contador = 0;

  for (let i = 0; i < autos.length; i++) {
    const { color } = autos[i];
    if (tono === color) {
      contador++;
    }
  }
  if (contador > 0) {
    console.log(`hay ${contador} autos de color ${tono}`);
  } else console.log(`No hay autos con el color ${tono}`);
};
comprobarColor("rojo");
