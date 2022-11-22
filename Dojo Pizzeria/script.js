//Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzaOven(){
    var pizza = {
        crustType:"medium",
        sauceType:"tomato",
        cheese: "lacey swiss cheese",
        toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
    };
        
    console.log(pizza);
}

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
function pizzaCombination(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaCombination("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(pizza1);

//Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
var pizza2 = pizzaCombination("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

//Create 2 more pizzas with any toppings we like!
var pizza3 = pizzaCombination("hand tossed", "marinara", ["mozzarella"], ["mushrooms"]);
