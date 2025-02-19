/**
 * este json es de prueba para para ver el parseo a un objeto
 */
const json =`{
  "name": "Marina",
  "level": 5,
  "maxLevel": 20,
  "fuerza": 15,
  "alive": true,
  "habilidades": ["terca", "tozuda", "concienzuda"],
  "attributes": {
    "health": 100,
    "stamina": 80
  }
}`;

let user = JSON.parse(json);
console.log(user);

//vamos a conver un objeto a json
user ={
    name:"marina",
    level:10,
    maxlevel:20,
    fuerza:99,
    alive:true,
    habilidades:["conversaion","programacion"],
    atributos:{
        salud:200,
        stamina:100,
    },
    talk:function(){
        return"hola";
    },
};
console.log(JSON.stringify(user));