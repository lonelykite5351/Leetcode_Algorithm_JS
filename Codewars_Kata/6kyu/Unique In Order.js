//  https://www.codewars.com/kata/unique-in-order/javascript

var uniqueInOrder=function(iterable){
    
    let result = []
    for(let i=0; i<iterable.length; i++ ){
        if(iterable[i] !== iterable[i+1])
            result.push(iterable[i])
    }
    return result

/*-----method 1
    let arr = [...iterable]
    let result = []
    let temp = ''
    for(let i in arr){
        if(temp !== arr[i]){
            temp = arr[i]
            result.push(temp)
        }
    }
    return result
*/
}

let str = 'AAAABBBCCDAABBB'
let str2 = 'AAAA'
let arr2 = []
console.log(uniqueInOrder(str))

for(let i in str){
    arr2.push(str[i])
}
console.log(arr2)

let arr = [...str]
let newSet = new Set(arr.map(i=>i))
console.log(arr)
console.log(newSet)