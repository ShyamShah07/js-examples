console.log("2" > 1)
console.log("2" < 1)
console.log("2" == 2) 
console.log("2" === 2) // === also compares datatype
console.log(null  >=  0) // equality and comparsions work alag alag wayy
console.log(null   == 0)
console.log(null  <=  0) 
console.log(undefined ==   0)
console.log(undefined  >=  0)
console.log(undefined  <  0)

// Always compare same data type videos
/* Memory(Stack,heap)
Stack - primitve , new copies are made
Heap - non primitive 
*/
let a = 10
b = a ;
b = 20 // new copies a and b are created in stack
console.log(a)
let arr = ["1" , "2" , "3"] 
arr1 = arr; // arr1 and arr points to same memory in heap 
arr1 = ['2' , '3']
console.log(arr1)