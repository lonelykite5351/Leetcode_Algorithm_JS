// https://www.codewars.com/kata/detect-pangram/javascript

function isPangram(str){
    let newStr = str.split(' ').join('')
    let newSet = new Set(newStr)
    return newSet.size >= 26 ? true : false
}

//---------------------------------------

let str = 'The quick brown fox jumps over the lazy dog'
let str1 = str.split(' ').join('')
let newSet = new Set(str1)
console.log(str1)
console.log(newSet.size)

console.log(isPangram(str))