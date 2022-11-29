class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.powern= power;
        this.res = res;
    }
    attack(target){
        console.log(target instanceof Unit);
    }
    
    
}

let mycar = new Card("Red Belt Ninja");
let a = mycar instanceof Card;
console.log(a);

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}