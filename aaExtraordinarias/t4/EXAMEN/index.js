let terminar = false;
while (terminar != true) {
  let respuesta = window.prompt(
    "elige entre estas diferentes opciones\n1: empleados de guardia por pais\n2: top de empleados con mayor sueldo \n3: empleados con lenguaje especifico \n4: empleados que pueden ascender \n5: empleado mas joven con mayor sueldo \n6: porcentaje empleados por seniority \n7: calculo costos de la empresa"
  );
  if (respuesta == 1) {
    let empleadofiltradosguardia = empleadosDeGuardiaPorPais(empleados);
    console.log(empleadofiltradosguardia);
  } else if (respuesta == 2) {
    let numusu = parseInt(prompt("dime un numero para filtrar"));

    let resultado = topNEmpleadosConMayorSueldo(empleados, numusu);
    console.log(resultado);
  } else if (respuesta == 3) {
    let respminleng = parseInt(prompt("ingresa el minimo de lenguajes:"));
    let respreqleng = prompt("ingresa el lenguaje obligatorio:");
    let result3 = empleadosConLenguajeEspecifico(
      respminleng,
      respreqleng,
      empleados
    );
    console.log(result3);
  } else if (respuesta == 4) {
    let result4 = empleadosQuePuedenAscender(empleados);
    console.log(result4);
  } else if (respuesta == 5) {
    let result5 = empleadoMasJovenConMayorSueldo(empleados);
    console.log(result5);
  } else if (respuesta == 6) {
    let result6 = porcentajeEmpleadosPorSeniority(empleados);
    console.log(result6);
  } else if (respuesta == 7) {
    let result7 = calculoCostosEmpresa(empleados);
    console.log(result7);
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

function topNEmpleadosConMayorSueldo(empleados, numerousuario) {
  if (
    !Number.isInteger(numerousuario) ||
    numerousuario <= 0 ||
    numerousuario > 100
  ) {
    return "el numero ingresado es mayor que el numero de usuarios";
  }
  let copyarr = [...empleados];
  let ordenado = copyarr.sort((a, b) => b.sueldo - a.sueldo);
  return ordenado.slice(0, numerousuario);
}

function empleadosConLenguajeEspecifico(minleng, reqleng, empleados) {
  if (isNaN(minleng) || minleng <= 0) {
    return "tienes que ser mayor a 0";
  }
  let arrfiltradoemp = empleados.filter(
    (empleado) =>
      empleado.lenguajes.length >= minleng &&
      empleado.lenguajes.some(
        (lenguajereq) => lenguajereq.toLowerCase() == reqleng.toLowerCase()
      )
  );
  return arrfiltradoemp;
}
function empleadosQuePuedenAscender(empleados) {
  let arrascienden = empleados.filter(
    (empleado) => empleado.seniority != "Senior" && empleado.sueldo <= 100000
  );
  return arrascienden;
}
function empleadoMasJovenConMayorSueldo(empleados) {
  const maxsueldo = Math.max(...empleados.map((empleado) => empleado.sueldo));
  let arrmasjoven = empleados
    .filter((empleado) => empleado.sueldo == maxsueldo)
    .sort((a, b) => a.edad - b.edad);
  return arrmasjoven;
}
function porcentajeEmpleadosPorSeniority(empleados) {
  let arrsemiSenior = empleados.filter(
    (empleado) => empleado.seniority == "Semisenior"
  );
  let semisenior = (arrsemiSenior.length / empleados.length) * 100;
  let arrjunior = empleados.filter(
    (empleado) => empleado.seniority == "Junior"
  );
  let junior = (arrjunior.length / empleados.length) * 100;
  let arrtrainee = empleados.filter(
    (empleado) => empleado.seniority == "Trainee"
  );
  let trainee = (arrtrainee.length / empleados.length) * 100;
  let arrSenior = empleados.filter(
    (empleado) => empleado.seniority == "Senior"
  );
  let senior = (arrSenior.length / empleados.length) * 100;
  return {
    Semisenior: semisenior,
    Junior: junior,
    Trainee: trainee,
    Senior: senior,
  };
}
function calculoCostosEmpresa(empleados) {
  let copyarr = [...empleados];
  let resultbruto = copyarr.reduce(
    (acumulador, empleado) => acumulador + empleado.sueldo,
    0
  );
  let Tobrasoc = resultbruto * 0.03;
  let Tjub = resultbruto * 0.11;
  let TSueldoNet = resultbruto - (Tobrasoc + Tjub);
  return {
    Sueldobruto: resultbruto,
    Totalobrasocial: Tobrasoc,
    Totaljubilacion: Tjub,
    TotalSueldoNeto: TSueldoNet,
  };
}
