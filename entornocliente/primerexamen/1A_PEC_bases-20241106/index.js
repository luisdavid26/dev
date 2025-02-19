let menu = true;
let nombrevendedores;
let nombresucursales;
let nombrecomponente = [];
while (menu) {
  ventas.vendedores.forEach((element) => {
    nombrevendedores = ventas.vendedores.join("\n");
  });
  ventas.vendedores.forEach((element) => {
    nombresucursales = ventas.sucursales.join("\n");
  });
  ventas.detalle.forEach((element) => {
    nombrecomponente = nombrecomponente.concat(element.componentesPC); // Concatenar los componentes
  });

  let nombrecomponentes = nombrecomponente.join("\n");

  var opcion = prompt(
    `Selecciona una opción:\n1. Ventas por Vendedor (componentes) \n2. Ventas por Sucursal (número) \n3. Cantidad Ventas Componente\n4. Presupuesto PC \n5. Ventas Totales por Vendedor (número) \n6. Salir`
  );

  switch (opcion) {
    case "1":
      let nomvendusu = prompt(
        `Los vendedores son:\n${nombrevendedores}\nDime el nombre del vendedor por el que quieres buscar:`
      );
      if (ventas.vendedores.includes(nomvendusu)) {
        let resultado = ventasVendedores(nomvendusu, ventas);
        if (resultado && resultado.length > 0) {
          console.log(`Ventas del vendedor: ${nomvendusu}`);
          console.log(`------------------------------------------`);
          resultado.forEach((venta) => {
            console.log(
              `Fecha: ${venta.fecha.toLocaleDateString()}, Componentes: ${
                venta.componentesPC
                  ? venta.componentesPC.join(", ")
                  : "No especificado"
              }`
            );
          });
        }
      } else {
        console.log("El vendedor no existe en la lista.");
      }
      break;

    case "2":
      let nomsucusu = prompt(
        `Los nombres de las sucursales son:\n${nombresucursales}\nDime el nombre de la sucursal por la que quieres buscar:`
      );
      if (ventas.sucursales.includes(nomsucusu)) {
        let resultado = ventasSucursal(nomsucusu, ventas);
        console.log(`El número total de ventas por sucursal es: ${resultado}`);
      } else {
        console.log("La sucursal no existe en la lista.");
      }
      break;
    case "3":
      let nomcompousu = prompt(
        `los nombres de los componentes son\n${nombrecomponentes}\ndime el nombre del componente por la que quieres buscar`
      );
      let resultcompo = cantidadVentasComponente(
        nomcompousu,
        ventas.vendedores
      );
      console.log(`Presupuesto del PC: ${nombrecomponentes}`);
      console.log(`------------------------------------------`);
      console.log(
        `el componente se a vendido este nuemero de veces: ${resultcompo}`
      );
      break;

    case "4":
      let nombresdeloscompo = prompt(
        `los nombres de los componentes son\n${nombrecomponentes}\ndime los nombres de los componentes  para el presupuesto (separados por por coma ",")`
      );
      result = presupuestoPC(nombresdeloscompo, ventas);

      console.log(
        `el presupuesto con las piezas ${nombresdeloscompo} \n tiene un precio final de ${result}`
      );
      break;

    case "5":
      let nombretotalvendedor = prompt(
        `los nombres de los vendedores son:\n${nombrevendedores}\ndime el nombre del vendedor`
      );
      console.log(`ventas totales del vendedor: ${nombretotalvendedor}:`);
      console.log(`------------------------------------------`);
      result = ventasTotalesVendedore(nombretotalvendedor, ventas);
      console.log(`las ventas totales han sido: ${result} euros`);
      break;

    case "6":
      alert("Adiós!");
      menu = false;
      break;
  }
}
