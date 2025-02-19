function ventasVendedores(nomventausu, ventas) {
  console.log(`Ventas del vendedor: ${nomventausu}`);
  console.log(`------------------------------------------`);
  try {
    // Filtrar las ventas del vendedor especificado
    let ventasVendedor = ventas.detalle.filter(
      (detalle) => detalle.nombreVendedore === nomventausu
    );
    if (ventasVendedor.length > 0) {
      return ventasVendedor; // Devolver las ventas del vendedor
    } else {
      console.log("No se encontraron ventas para este vendedor.");
      return [];
    }
  } catch (error) {
    console.error("Ocurrió un error: asegura de poner bien el nombre", error);
    return null; // Devolver null en caso de error
  }
}

function ventasSucursal(nomsucu, ventas) {
  let contador = 0;
  console.log(`Ventas de la sucursal: ${nomsucu}`);
  console.log(`------------------------------------------`);
  try {
    // Recorremos el array de ventas para contar las que coinciden con la sucursal
    ventas.detalle.forEach((venta) => {
      if (venta.sucursal === nomsucu) {
        contador++;
      }
    });
    if (contador > 0) {
      console.log(`Total de ventas: ${contador}`);
      return contador; // Devolver el número de ventas
    } else {
      console.log("No se encontraron ventas para esta sucursal.");
      return 0; // Devolver 0 si no hay ventas
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
    return null; // Devolver null en caso de error
  }
}
function cantidadVentasComponente(nomcomponenteusu, componente) {
  let contadorcompo = 0;
  componente = ventas.detalle.componentesPC;
  console.log(`ventas por componente: ${nomcomponenteusu}:`);
  console.log(`------------------------------------------`);
  ventas.detalle.forEach((detalle) => {
    if (detalle.componentesPC.includes(nomcomponenteusu)) {
      contadorcompo++;
    }
  });
return contadorcompo;
}

function presupuestoPC(componentesusu, ventas) {
  let totalpres = 0;
  // Usa la propiedad correcta "precios"
  let arrventasprecio = ventas.precios;
  console.log(`Presupuesto del PC: ${componentesusu}`);
  console.log(`------------------------------------------`);

  // Convertir la cadena de componentes en un array
  let arrcompousu = componentesusu.split(",");

  // Recorrer cada componente ingresado por el usuario
  arrcompousu.forEach((componente) => {
    componente = componente.trim(); // Eliminar espacios en blanco
    // Buscar el objeto que contiene el precio para el componente actual
    let preciocomponente = arrventasprecio.find(
      (item) => item.componente === componente
    );
    if (preciocomponente) {
      totalpres += preciocomponente.precio;
    } else {
      console.log(`Componente no encontrado: ${componente}`);
    }
  });
  return totalpres;
}

function ventasTotalesVendedore(nomvendedores, ventas) {
  let totalpricompo=0;
  console.log(`ventas :${nomvendedores}:`);
  console.log(`------------------------------------------`);
  //try {//recorrer el total de vendedores
    nomvendedores=nomvendedores.trim();
    let ventasdelvendedor= ventasVendedores(nomvendedores,ventas);
    console.log(`nombre del vendedor antes de pasarle al for each ${ventasdelvendedor},componentes${ventasdelvendedor[0].componentesPC}`)
        
   ventasdelvendedor.forEach(element => {
    let elementocompo=element.componentesPC.join(",");
    console.log(`elementocompo: ${elementocompo}`)
       totalpricompo=presupuestoPC(elementocompo,ventas);
    });
    console.log(totalpricompo);
  //} catch (error) {
  //  console.error(`a ocurrido un error`); //si ocurre un error lo manejamos con el try catch
  //}
}
