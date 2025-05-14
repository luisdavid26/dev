let terminar = false;
while (terminar != true) {
  let respuesta = window.prompt(
    "elige entre estas diferentes opciones\n1: empleados de guardia por pais\n2: top de empleados con mayor sueldo \n3: empleados con lenguaje especifico \n4: empleados que pueden ascender \n5: empleado mas joven con mayor sueldo \n6: porcentaje empleados por seniority \n7: calculo costos de la empresa"
  );
  if ((respuesta ==1)) {
    let empleadofiltradosguardia = empleadosDeGuardiaPorPais(empleados);
    console.log(empleadofiltradosguardia);
  }else
  if ((respuesta == 2)) {
      let numusu = parseInt(prompt("dime un numero para filtrar"));
   if (isNaN(numusu)) {
  console.error("No has introducido un número válido.");
} else {
  let resultado = topNEmpleadosConMayorSueldo(empleados, numusu);
  console.log(resultado);
}
  }else
  if ((respuesta == 3)) {
  }else
  if ((respuesta == 4)) {
  }else
  if ((respuesta ==5)) {
  }
}
function empleadosDeGuardiaPorPais(empleados) {
  const enGuardia = empleados.filter((emp) => emp.haceGuardia);

  const resultado = enGuardia.reduce((acumulador, empleado) => {
    const pais = empleado.pais;
    if (!acumulador[pais]) {
      acumulador[pais] = [];
    }

    acumulador[pais].push(empleado);
    return acumulador;
  }, {});
  return resultado;
}
function topNEmpleadosConMayorSueldo(empleados, N) {
  if (!Number.isInteger(N) || N <= 0) {
    return [];
  }
  let copyarr = [...empleados];
  let ordenado = copyarr.sort((a, b) => b.sueldo - a.sueldo);
  return ordenado.slice(0, N);
}

