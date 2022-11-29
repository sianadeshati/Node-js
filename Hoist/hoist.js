//1
var hello = 'world'; 
console.log(hello); 

//2
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//4
var food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();


//5
var food = "fish";
var mean = function() {
    console.log(food);
    food = "chicken";
    console.log(food);
   
}
console.log(food);
mean();

//6
var genre = "disco";
console.log(genre);
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();

//7
var dojo = "burbank";
console.log(dojo);
dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
}
console.log(dojo);
learn();


//8

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        console.log("closed for now")
    }
    return dojo;
}            
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));                     

