let num = window.prompt("dime los grados que quieres pasar a farenheit: ")//pedimos los grados
function traduccion(num){
    let grados =num;//iniciamos los grados
    let farenheit =grados*1.8+32;//convertimos los grados a farenheit
    window.alert("en farenheit seria: "+farenheit);//mostramos los farenheit
}
traduccion(num);//llamamos la funcion