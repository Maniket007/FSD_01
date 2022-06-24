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













