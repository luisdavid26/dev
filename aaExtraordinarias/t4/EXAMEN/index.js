let terminar = false;
while (!terminar) {
  let respuesta = window.prompt(
    "eligue entre estas diferentes opciones\n1: empleados de guardia por pais\n2: top de empleados con mayor sueldo \n3: empleados con lenguaje especifico \n4: empleados que pueden ascender \n5: empleado mas joven con mayor sueldo \n6: porcentaje empleados por seniority \n7: calculo costos de la empresa"
  );
  if ((respuesta = 1)) {
    let empleadofiltradosguardia = empleadosDeGuardiaPorPais(empleados);
    console.log(empleadofiltradosguardia);
  }
  if ((respuesta = 2)) {
  }
  if ((respuesta = 3)) {
  }
  if ((respuesta = 4)) {
  }
  if ((respuesta = 5)) {
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
