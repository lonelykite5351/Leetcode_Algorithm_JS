// https://www.codewars.com/kata/a-chain-adding-function/javascript

function add(n){
    console.log('n:',n)
    let sum =  function (a) {
        console.log('a:',a)
        return add(n + a)
    }
    sum.valueOf = function () {
        return n
    }
    return sum
}


// add(1)(2)(3)
console.log(add(1)(2)(3))