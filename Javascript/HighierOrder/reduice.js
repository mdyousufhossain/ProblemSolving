// The arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

let arr = [2,31,4,1,5]

let sum = (acc,val) => acc + val




console.log(arr.reduce((acc,val) => val > acc ? val:acc )) //findMax value 
console.log(arr.reduce((acc,val) => val > acc ? acc:val )) //findMin value 

