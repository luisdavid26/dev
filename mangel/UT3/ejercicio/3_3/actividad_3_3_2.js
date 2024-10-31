function diaDeSemana() {
    //Cogemos la fecha actual y le damos un formato
    let dia = new Date(Date.now());
    //sacamos el dia de la fecha obtenida
    dia = dia.getDay();
    //depende del dia que sea nos dira que dia es de la semana
    switch (dia) {
        case 0:
            alert("El dia de hoy es Domingo");
            break;
    
        case 1:
            alert("El dia de hoy es Lunes");
            break;

        case 2:
            alert("El dia de hoy es Martes");
            break;

        case 3:
            alert("El dia de hoy es Miercoles");
            break;

        case 4:
            alert("El dia de hoy es Jueves");
            break;

        case 5:
            alert("El dia de hoy es Viernes");
            break;

        case 6:
            alert("El dia de hoy es Sabado");
            break;

        default:
            alert("No se consiguio la fecha");
            break;
    }
}

diaDeSemana();