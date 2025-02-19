/** 
 * Valor string (toString) de una clase y valor primitivo (valueOf)
 */

//--- NO se sobreescribe toString() ni valueOf()
class Warrior {
    constructor(name, vitality) {
        this.vitality = vitality;
        this.name = name;
    }
}
let w1 = new Warrior("James Warrior", 150);
console.log(w1.toString()); // '[object Object]'
console.log("Warrior (w1): " + w1); // 'Warrior(w1): [object Object]' -- llama al toString() de Object


//--- Se sobreescribe toString()
class Warrior2 {
    constructor(name, vitality) {
        this.vitality = vitality;
        this.name = name;
    }
    // sobreescritura del método toString() del objeto Object{}
    toString() {
        return this.name + " (" + this.vitality + ")";
    }
}
let w2 = new Warrior2("Peter Strong", 100);
console.log("Warrior2 (w2): " + w2); // 'Warrior(w1): Peter Strong (100)'

// Se sobreescribe toString() y valueOf()
class Warrior3 {
    constructor(name, vitality) {
        this.vitality = vitality;
        this.name = name;
    }
    // sobreescritura del método toString() del objeto Object{}
    toString() {
        return this.name + " (" + this.vitality + ")";
    }
    // sobreescritura del método valueOf del objeto Object{}
    valueOf() {
        return this.vitality;
    }
}

const w3_1 = new Warrior3("James Warrior", 150);
const w3_2 = new Warrior3("Peter Strong", 100);
const w3_3 = new Warrior3("Wanna Die", 80);
const w3_4 = new Warrior3("Lame Warrior", 110);

console.log(w3_1 < w3_2); // false -- 150 no es menor que 100
console.log(w3_1 > w3_4); // true -- 150 es mayor que 110

const warriors = [w3_1, w3_2, w3_3, w3_4];
warriors.sort((w3_1, w3_2) => w3_1 - w3_2);
console.log(warriors.toString());
