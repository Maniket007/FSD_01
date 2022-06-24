//Array --- It is continous memory aloocation and index is starting from 0..
//we can use array for stack(LIFO) and queue(FIFO) purpose...
//Javascript has some prototype (Predefined function that can be used here...)
//Options for adding and removing the element from the array.....
//we have two option to store and delete the element from the rear side..
//              1. PUSH (Insert the elelment)
//              2. POP (delete the element)..
//we have two more options to store amd delete the element from front side...
//              1. Shift (delete the element from the begnning..)
//              2. Unshift (Insert the element from the begnnig...)..

let arr = new Array() //Array constructor method..
let arr1 = [] //Empty array..

let num = [1,2,3,4,5]
console.log(num)
//console.log(num.pop())
//console.log(num.pop())
//console.log(num.toLocaleString(-1))
console.log(num.push(6))
console.log(num.push(7,8,9))
console.log(num)

//methods that works at begnning of the array..
let num1 = [2,3,4,5,6,7]
num1.shift()
num1.shift()
num1.unshift(-1,-2,-3)
console.log(num1)

let arr2 = ['Apple', 'Orange', 'Litchi']
delete arr[1]

console.log(arr[1])
console.log(arr2.length)
console.log(arr2)
//Splice method
//arr3.splice(start, deletecount, ele1,...arr...elen)
//it will always return removed element...

let arr5 = ['Kite', 'pano', 'light']
arr5.splice(1,1)
console.log(arr5)



