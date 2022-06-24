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
