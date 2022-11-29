
class Sensei extends Ninja {
    constructor(name) {
        super(name,200); 
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
      }
    speakWisdom(){
        super.drinkSafe();
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();