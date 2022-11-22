const arr = [ 5,3,1,3,1,4,5,6,2]

function fixArray(arr){
  const _DuplicateRemoved = Array.from(new Set(arr))
    
  return (`
     No duplicate : ${_DuplicateRemoved.sort()} `) 
}

const testArr = fixArray(arr)

console.log(testArr)