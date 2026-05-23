"use script"
let a = [1,2,3,4]
b = [5,6,7]
// b = new Array(1,2,3,4,5,6,7,8)
// console.log(b.slice(0,4))
// console.log(b)
// console.log(b.splice(0,4))
// console.log(b)
// // console.log(a.includes(3))
// // console.log(a.indexOf(6))
// a.push(5)
// a.unshift(100)
// b.shift()
// console.log(a)
// console.log(b)
// let aa = a.join()
// console.log(aa)
// console.log(typeof aa)
// a.push(b)

// let c = a.concat(b) // push adds elemets in existing ones and concat returns a new array
// console.log(c)

// let c = [...a,...b]
// console.log(c)

let aa = [1,2,3,[4,5,[6,7,8]],9]
aa.flat(Infinity)
console.log(aa)
let aaa = 1
bbb = 2 
c = 3

console.log(Array.isArray("Shyam"))
console.log(Array.from("1234Shyam"))
console.log(Array.of("1" , "1" , "2" , "3"))
console.log(Array.of(aaa,bbb,c))



