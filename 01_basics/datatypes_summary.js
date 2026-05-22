/* 
Types of data : primitive and non primitive 
primitive 7 types - String , Number , Boolean , null , undefined , Symbol , BigInt
non primitive - object , Array , Functions
*/
let id = Symbol('123') // return type is also a symbol 
anotherId = Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id === anotherId)
console.log(id == anotherId)
console.log(String(id) == String(anotherId))

const heros = ["ironman" , "spiderman" , "thor"]
const myFunc = function() {
    console.log("hello world")
}
let myObj = {
    name : "Shyam" ,
    age : 18 ,

}
console.log(typeof id)
console.log(typeof myFunc)
console.log(typeof null)

