// const arr = [12,445,3432,765,2343,6433,45434]

// const forEachItem = arr.forEach(function(element,index){
//     return `${index} ${element} `
// } )

// console.log(forEachItem)

function MathBeta(x=0,y=0){
    var total = 0
   
    return {
        increament:() => {
           const amunt =  x+y
           if ( x <= 0 || y <= 0 || x === null || y === null) {
            return "Please add Value"
        } 
        return total = amunt ;
        },
        decrement:() => { 
        if(x>y){
            const amount = x-y
            return total = amount 
        } else if ( x <= 0 || y <= 0 || x === null || y === null) {
            return "Please add Value"
            
        }  
        else {
                return total = y-x
            }
        },
        divide:() => {

            if(x>y){
                const amount = x/y
                return total = amount
            } else if ( x <= 0 || y <= 0 || x === null || y === null) {
                return "Please add Value"
            } 
            else {
                return total = Math.floor(y/x)
            } 
        }
    }
}



let sum = MathBeta(8,4).increament()


console.log(MathBeta(48,4).divide() === MathBeta(8,4).increament(),sum)


