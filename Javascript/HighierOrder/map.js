// The operation that map() performs is commonly known as a mapping 
// because it maps every item in an input iterable to a new item in a resulting iterable.

/* 
//////////////////////
The map() method in JavaScript creates an array by calling a specific function on each element // present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array.
/////////////////////
*/

// syntex
// array.map(function(currentValue, index, arr), thisValue)

let val = [2,4,5,6,7,8,10]


const doubler = (x) => x*3

function multiplayer(factor){
   return  function(x){
    return factor * x
   }
}

const doubled = val.map(doubler)



const goodguys = [
    { name:"Batman"  ,   ability:"Rich" ,   id : 234951 ,  lives: "Gotham"} , 
    {name:"SuparMan",   ability:"Super",    id : 245062 ,  lives: "Metrop"} , 
    {name:"WonderWomen",ability:"women" ,   id : 256173 ,  lives: "Women"} , 
    {name:"Flash" ,     ability:"speed" ,   id : 267284 ,  lives: "Central"} , 
    {name:"Johnh" ,     ability:"Martian" , id : 278362 ,  lives: "Mars"} , 
    {name:"Shazam" ,    ability:"kid" ,     id : 289473 ,  lives: "school"} , 
    {name:"Aquaman" ,   ability:"fish" ,    id : 290584 ,  lives: "Sea"}   
]

let findname =  goodguys.map(function(x){ if (x.ability === "kid"){
    return x.id
}} )

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

let arr = Array(100).fill().map(() => Math.floor(Math.random() * 41))

console.log(arr)

