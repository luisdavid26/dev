import express, { raw } from 'express';


const diccionarioRouter = express.Router();

/* Al realizar esta parte para guardar los datos y hacer la simulacion
de persistencia de datos me vino la duda de que tipo de objeto usar.
En el ejercicio original se nos pedia usar un Map() y he querido seguir
manteniendo que se use un Map() y bueno eso me llevado a problemas para
tratar el JSON luego, he estado investigando como convertir un map a JSON 
para poder luego poder tratarlo nuevamente y hay un metodo que no hemos
dado en clase que es 'Object.fromEntries(map)', asi que he optado por la segunda
opcion que es hacer una conversion iterable. Te voy a dejar todas las referencias
que he usado en un txt aparte por si quieres mirarlas, tambien te he dejado
las referencias de cuando estaba intentando usar un almacenamiento local jajajaja */
let listaDiccionario = new Map();

//funcion para transformar un mapa a un json
const mapToJson = (map) => {
    const jsonObj = {};
    map.forEach((value, key) => {
        jsonObj[key] = value;
    });
    return jsonObj;
};


//--------------------------------------

// Obtener todos los mensajes
// * GET
/* Para obetener todos los registros del diccionario debemos poner:
localhost:8000/diccionario
y nos devolvera si hay registros:
{
    "message": "Diccionario de rimas",
    "data": {
        "pata": [
            "cabra"
        ],
        "luz": [
            "azul"
        ]
    }
}

si no hay registros:
{
    "message": "Diccionario de rimas",
    "data": {}
}
*/
diccionarioRouter.get('/', (req, res) => {
    return res.json({
        message: "Diccionario de rimas",
        data: mapToJson(listaDiccionario)
    });
});

// Obtener una palabra específica y sus rimas
// * GET 
/* Para obetener un registro especifico del diccionario debemos poner:
localhost:8000/diccionario/palabra 
Nos devolvera en el ejemplo de buscar pata:
{
    "message": "Rimas para la palabra pata",
    "data": {
        "pata": [
            "cabra"
        ]
    }
}
*/
diccionarioRouter.get('/:palabra', (req, res, next) => {
    const { palabra } = req.params;

    //si la palabra existe
    if (listaDiccionario.has(palabra)) {
        res.json({
            message: 'Rimas para la palabra ' + palabra,
            data: {
                [palabra]: listaDiccionario.get(palabra)
            }
        });
    }
    //si la palabra no se encuentra
    else {
        res.status(404).json({
            message: `En el diccionario no se ha encontrado la palabra ${palabra}`
        });
    }
});

// Agregar una nueva palabra y rima, o agregar rima a palabra existente
// * POST
/* Para introducir una palabra y una rima debemos poner un JSON como el siguiente:
{
    "palabra": "luz",
    "rima": "azul"
}

Devolvera:
{
    "message": "Palabra y rima añadidado con exito",
    "data": {
        "luz": [
            "azul"
        ]
    }
}

si volvemos a insertar el mismo JSON nos saldra:
{
    "message": "La rima ya existe para esta palabra"
}

Si añadimos otra rima diferente a la palabra nos saldra:
{
    "message": "Rima añadidada con exito",
    "data": {
        "luz": [
            "azul",
            "algo"
        ]
    }
}
*/
diccionarioRouter.post('/', (req, res, next) => {
    const { palabra, rima } = req.body;

    //errores
    if (!palabra) {
        const error = new Error('No se ha encontrado la propiedad palabra');
        error.status = 404;
        return next(error);
    }
    if (!rima) {
        const error = new Error('No se ha encontrado la propiedad rima');
        error.status = 404;
        return next(error);
    }

    //si la palabra existe
    if (listaDiccionario.has(palabra)) {
        const rimas = listaDiccionario.get(palabra);

        //si la rima exite
        if (rimas.includes(rima)) {
            return res.status(400).json({
                message: "La rima ya existe para esta palabra"
            });
        }

        rimas.push(rima)

        return res.status(201).json({
            message: "Rima añadidada con exito",
            data: mapToJson(listaDiccionario)
        });
    }
    // si no existe la palabra
    else {
        listaDiccionario.set(palabra, [rima]);

        return res.status(201).json({
            message: "Palabra y rima añadidado con exito",
            data: mapToJson(listaDiccionario)
        });
    }
});


// Eliminar una palabra completa
// * DELETE
/* Para eliminar una palabra debemos poner
localhost:8000/diccionario/palabra 
y nos saldra:
{
    "message": "Palabra luz eliminada del diccionario",
    "data": {}
}
*/
diccionarioRouter.delete('/:palabra', (req, res, next) => {
    const { palabra } = req.params;

    //si la palavra existe
    if (listaDiccionario.has(palabra)) {
        listaDiccionario.delete(palabra);
        res.json({
            message: `Palabra ${palabra} eliminada del diccionario`,
            data: mapToJson(listaDiccionario)
        });
    }
    //si no se ha encontrado la palabra
    else {
        res.status(404).json({
            message: `Palabra ${palabra} no encontrada en el diccionario`
        });
    }
});

// Eliminar una rima específica de una palabra
// * DELETE
/* Para eliminar una palabra debemos poner
localhost:8000/diccionario/palabra/rima
y nos saldra:
{
    "message": "Rima \"azul\" eliminada de la palabra luz",
    "data": {
        "luz": []
    }
}
*/
diccionarioRouter.delete('/:palabra/:rima', (req, res, next) => {
    const { palabra, rima } = req.params;

    //si la palabra existe
    if (listaDiccionario.has(palabra)) {
        const rimas = listaDiccionario.get(palabra);
        const rimaIndex = rimas.indexOf(rima);

        //si la rima existe
        if (rimaIndex > -1) {
            rimas.splice(rimaIndex, 1);

            return res.json({
                message: `Rima "${rima}" eliminada de la palabra ${palabra}`,
                data: mapToJson(listaDiccionario)
            });
        }

        return res.status(404).json({
            message: `Rima "${rima}" no encontrada para la palabra ${palabra}`
        });
    }
    //si no se encuentra la palabra
    else {
        return res.status(404).json({
            message: `Palabra ${palabra} no encontrada en el diccionario`
        });
    }
});

//--------------------------

diccionarioRouter.use((req, res, next) => {
    console.log(`Request method: ${req.method}, Request URL: ${req.originalUrl}`);
    next();
});


export default diccionarioRouter;