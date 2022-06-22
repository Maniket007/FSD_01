//it is something to coomment in js.... it is in line comment means single line comment.
console.log("Hi there");
/*this is multiline comment*/
var a;
a=10;
console.log(a);
var b="Sonu";
console.log(b);
console.log(1+1);
console.log(1+1+"1");
console.log("1"+1+1);
console.log(1-'1');
//8 basic type of datatype in javascript
//var message="Hello"
//message=12344
//console.log(message)

//let message="Hello";
//message=12344;
//console.log(message);

let message="Hello";
message=12344;
console.log(message);

//1. Number
let n=123445;
n=123.89;
console.log(n);

//specific numeric numbers
//Infinity
//alert(1/0)
//console.log(1/0);
console.log(Infinity);

//NaN
console.log(NaN+1);
console.log(NaN*3);
console.log("not a number" / 2-1);
console.log(NaN * 0);
//console.log(NaN**0);       // Exception

//2. BigInt
const BigInt = 900711915786783n;
console.log(BigInt);

//3. String
let str="Heloo";
let str2='Single quote';
let str3=`backtick and this is also a string`;
//extended functionality embeded a value ${}
let str4=`${str} , this is you`;
console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);

//4. bollean (ligical type)
//let isChecked=true;
//console.log(isChecked);

let isChecked=false;
console.log(isChecked);

let isGreater = 4>1;
console.log(isGreater);

//5. Null
//6. Unddefined ---> it means value is not defined
//7. Object and symbols

//Type conversion


//String conversion
//let value=true;
//value=String(value);
//console.log(typeof value);

//Numeric conversion
//alert('6'/'2');
//let str="123";
//let num=Number(str);
//console.log(typeof num);
console.log(Number(true));

//Comparision opreator
console.log(2>1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);
console.log("Z" > "A");

//unicode
//console.log("2">1);
//console.log("01" == 1);
console.log(0 == false);
console.log(""== false);
console.log(0 === false);
console.log(""=== false);

//Conditional statement
//if(condition){

//}
//else{

//}

//let result = condition ? value1 : value2;

//let AccessAllowed;
//let age = prompt('How old are you!', "");
/*if(age > 18)
{
    AccessAllowed = true;
}
else
{
    AccessAllowed = false;
}
alert(AccessAllowed)*/

//let age = prompt('How old are you!', "");
//let AccessAllowed = age > 18 ? true : false;
//alert(AccessAllowed);

//let age1 = prompt('age1', 18);
//let messgae = age1 < 3  ? "baby" : age1 < 18 ? "middle age" : age1 == 18 ? "Elligible";

//Logical opreator
// || OR
if(true||false)
{
    console.log("FATTY");
}

let hour = 9
if(hour < 10 || hour >18)
{
    console.log("The office is closed");
}

//Short circuit
true || console.log("Not Printed");

//&& And
//console.log(true && false);

let ho = 12;
let min = 30;
if(ho == 12 && min == 30)
{
    console.log('the time is 12:30');
}
