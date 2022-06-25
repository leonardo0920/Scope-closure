var a; //declarando
var b = 'b'; // declarando / asignando
b = 'bb'; // reasignando
var a = 'a'; //redeclarando


//Global scope
var fruit = 'Apple'; //Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    countries = "Venezuela"; //Global
    console.log(countries);
}

countries();
console.log(countries);