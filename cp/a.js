// const mycup = {
//     size : 4.65,
//     type : 'tea',
//     usedfor: 'drink',
//     item : 'blood',
//     usedby: 'vimpire'
// }


// const student = [{ name : 'bal',roll:123213 ,}]


// const arr = [1,2,3,4]

// const nar = arr.map((x) => x+x )

// console.log(nar)


// function callme(callback){
//     console.log('beeeh')
//     if (callback instanceof Function){
//         callback()
//     }
// }


// function bee(){
//     console.log('die die')
// }

// callme(bee)

// function multiplayer(factor){
//     return function(x){
//         return x * factor
//     }
// }

// double = multiplayer(2)

// console.log(double(2))


// let arr2 = [-1,3,5,6,8,0,1,9,1004,0x1df]

// console.log(arr2)

// let fsort =  arr2.sort((a,b) => b-a)
// console.log(fsort)
// let fsort1 =  arr2.sort((a,b) => a-b)

// var val = 'bal'
// var bal = arr2.forEach(x => x )
// console.log(val.match)

// console.log(bal)

// const n = [
//     {
//         name:'yousuf',
//         roll:'301',
//         sub:'cse',

//     }
// ]

const n = ['bal','sal','heda']
const m = [
    {
    'bal':'khuni',
    'sal':"shuna",
    'heda':"buna"
    }

]

const v = ""


function checkingValue(arr){

    if (typeof(arr) == "undefined" ){
        console.log("no value")
        
    } 
        else if(arr.filter(value=> value==obj).length > 0){
            const firstProperty = arr[0]
            for (const property in firstProperty) {
                console.log(`${property} : ${firstProperty[property]}`);
        }}
    else {
        for (const item of arr){
            console.log(item);
        }
    }
}

checkingValue(m)
// const heda = m[0]
// for (const property in heda) {
//     console.log(`${property} : ${heda[property]}`)
// };




