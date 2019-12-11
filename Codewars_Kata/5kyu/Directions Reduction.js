//  https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
    
//-----method 2：Regular Expression
    let str = arr.join('')
    let RegExp = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/
    while(RegExp.test(str)){
        str = str.replace(RegExp,'')
    }
    return str.match(/NORTH|SOUTH|EAST|WEST/g) || []

    
/*-----method 1 : Stack (push & pop)
    let result = []
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == 'NORTH' && result.slice(-1) == 'SOUTH'){
            result.pop()
            continue
        }
        else if(arr[i] == 'SOUTH' && result.slice(-1) == 'NORTH'){
            result.pop()
            continue
        }
        else if(arr[i] == 'EAST' && result.slice(-1) == 'WEST'){
            result.pop()
            continue
        }
        else if(arr[i] == 'WEST' && result.slice(-1) == 'EAST'){
            result.pop()
            continue
        }
        else
            result.push(arr[i]) 
    }
    return result
*/
}

//--------- 以下是測試區

let arr = ["NORTH", "WEST", "SOUTH", "EAST"]
let TF = arr.slice(-1) === "WEST"

dirReduc(arr)
console.log(arr.slice(-1))
console.log(TF)
console.log(dirReduc(arr))

let RegExp = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/
let str = arr.join('')
console.log(str)
console.log(RegExp.test(str))
while(RegExp.test(str)){
    str = str.replace(RegExp,'')
}

str = str.match(/NORTH|SOUTH|EAST|WEST/g)
console.log(str)

