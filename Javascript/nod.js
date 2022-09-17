// const path = require('path');
// const os = require('os')
// // const mypath = 'F:/code/New folder/newdotapp/newdotapp.iml'

// const fs = require('fs')

//  console.log(fs.readFileSync('d.txt').toString());


// console.log(path.parse(mypath))

//making a filter that filterd array 

const arr = [[1,2,3],4,6,9,[2,5,6]]


function arrfilter(array,elem){
    let fitleredArr = [] ;
    for(let i = 0 ; i < array.length; i++ ){
        if(array.indexOf(elem) != -1) {
            console.log(array.indexOf(elem))
            fitleredArr.push(array[i])
        }
        
    }
    return fitleredArr
}



console.log(arrfilter([1,2,3],23,541,1))


