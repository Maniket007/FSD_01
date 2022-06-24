//Function declaration..
function sum(a,b){
    //console.log(a+b);
    if (false){
        return a+b;
    }
    else
    {
        return a-b;
    }
}
console.log(sum(1,2));

//Function expression.. Name or unnamed.

//Unnamed function
let sum1 = function(c, d){
    return c+d;
}
console.log(sum1(4,3));

//Named function expression..
let sum2 = function(e, f){
    return e+f;
}
console.log(sum2(4,3));

//Annaonysum function..
/*function(){

}*/

/* JS is a single threaded language (line by line or one by one) and it is a syncronus means Top to bttom*/
console.log('Hi everyone')
console.log('Hi there')
console.log('No worries')

var a=100
function x(){
    return 10;
}
console.log(a);
console.log(x());

/*
Execution context
1. Variavle environemnt (Memory allocation)
2. Thread of execution (code execution)

or we can say JS has 2 phase
1. Memory creation.
2. code execution phase.
*/

console.log(sum3());
console.log(sum4);
console.log(sum5)
function sum3()
{
    return 2+3;
}
var sum4 = function(){
    return 2+3;
}

//Arrow function...
var sum5 = () =>{
    return 2+3;
};

/* Uses of let and const `let` is a signal that the variable may be reassigned
`const` is a signal that the identifier won't be reassigned. */


//Creating object..
let user = new Object() //object costructor syntax..
let user1 = {}  //Object literal syntax..
console.log(user)
console.log(user1)

let user2 ={
    name: 'Maniket',
    age: 23,
    street: 'Simri',
    "islike js" : true
}
//Adding the extra object 
user2.isAdmin = true
//deleting the object from existing..
delete user2.age
console.log(user2)

//accessing the value from object..
console.log(user2.name)
console.log(user2.age)
console.log(user2.street)
console.log(user2["islike js"])

//This is another type of function which is delclaring the object.
function makeuser(name1, age1){
    return{
        name1: name1,
        age1: age1
    }
}
let user3 = makeuser('Johny', 21)
console.log(user3.name1)
console.log(user3.age1)

//Shortcut properties...
function makeuser(name2, age2){
    return{
        name2,
        age2
    }
}
let user4 = makeuser('Danny', 22)
console.log(user4.name2)
console.log(user4.age2)











