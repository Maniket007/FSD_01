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

// let arr = new Array() //Array constructor method..
// let arr1 = [] //Empty array..

// let num = [1,2,3,4,5]
// console.log(num)
//console.log(num.pop())
//console.log(num.pop())
//console.log(num.toLocaleString(-1))
// console.log(num.push(6))
// console.log(num.push(7,8,9))
// console.log(num)

//methods that works at begnning of the array..
// let num1 = [2,3,4,5,6,7]
// num1.shift()
// num1.shift()
// num1.unshift(-1,-2,-3)
// console.log(num1)

// let arr2 = ['Apple', 'Orange', 'Litchi']
// delete arr[1]

// console.log(arr[1])
// console.log(arr2.length)
// console.log(arr2)
//Splice method
//arr3.splice(start, deletecount, ele1,...arr...elen)
//it will always return removed and replace the element...

// let arr5 = ['Kite', 'pano', 'light']
// arr5.splice(1,1)
// console.log(arr5)

//let arr6 = ['Ink', 'Jink', 'Javascript']
//let removed = arr6.splice(0,2)
//arr6.splice(0,3, "let's", "dance")
//console.log(removed)
// arr6.splice(2,0,'complex', 'language')
// console.log(arr6)

//slice..
//arr.slice([start], [end])
//It return new array and copy element from index start to end will not include
// let arr7 = ['1', '2', '3', '4', '5','6']
// console.log(arr7.slice(1,3))
// console.log(arr7.slice(-2))
// console.log(arr7.slice())

//creating duplicate array
//let arr8 = arr7.slice
//console.log(arr7 == arr8)

//Concat
//arr.concat(arg1, arg2.........)
//let arr9 = [1,2]
// console.log(arr9.concat([3,4]))
//console.log(arr9.concat([1,2,3,4,]))s
// console.log(arr9.concat([5,6],[7,8]))

//Iterate...
//  1.ForEach........
//It allow to run a function for every element of the array...
/*arr.forEach(function(item, index, array){
      //do something.... item..
})*/

/*['apple', 'orange', 'banana'].forEach((fruit, index, array10)=> {
    console.log(`${fruit} is at index ${index} in ${array10}`)
})*/

//Serching in array...
//indexOf, lastIndexOf and includes....
//arr.indexOf(item, from)--look for item startin from index from and if it is nor find anything it will return -1
//arr.lastIndexOf(item, from)---same looks from right to left..
//arr.includes(item, from)---look for item starting from index from and return true if found...
let arr =[1, 0, false]
console.log(arr.indexOf(0))
console.log(arr.indexOf(1))
console.log(arr.indexOf(2))
console.log(arr.lastIndexOf())
console.log(arr.includes(1))
console.log(arr.includes(5))

//filter, map and reduse...
//filter---------it returns array of filtered items..
/*-----Syntax  arr.filter(function(item, index, array){
                    //array matching item..
                    //[]---Empty array...
})*/

let users = [
    {id: 1, name: 'Maniket'},
    {id: 2, name: 'Peter'},
    {id: 3, name: 'lendege'}
]
let someUsers2 = users.filter(item => item.id = 3)
let someUsers1 = users.filter(item => item.id < 3)
let someUsers = users.filter(item => item.id > 3)
console.log(someUsers.length)
console.log(someUsers)
console.log(someUsers2)
console.log(someUsers1)

//map------transform an array..
let arr1 = [1,3,4,5,6,2]
let result = arr.map((item1, index1)=> (
    item1*2
))
console.log(result)

