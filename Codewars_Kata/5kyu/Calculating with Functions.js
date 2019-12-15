// https://www.codewars.com/kata/calculating-with-functions/javascript

function zero(haveFn) {return haveFn ? haveFn(0) : 0}
function one(haveFn) {return haveFn ? haveFn(1) : 1}
function two(haveFn) {return haveFn ? haveFn(2) : 2}
function three(haveFn) {return haveFn ? haveFn(3) : 3}
function four(haveFn) {return haveFn ? haveFn(4) : 4}
function five(haveFn) {return haveFn ? haveFn(5) : 5}
function six(haveFn) {return haveFn ? haveFn(6) : 6}
function seven(haveFn) {return haveFn ? haveFn(7) : 7}
function eight(haveFn) {return haveFn ? haveFn(8) : 8}
function nine(haveFn) {return haveFn ? haveFn(9) : 9}

function plus(b) {
    return function (a) { return a + b }
}
function minus(b) {
    return function (a) { return a - b }
}
function times(b) {
    return function (a) { return a * b }
}
function dividedBy(b) {
    return function (a) { return parseInt(a / b) }
}


//--------------------------------------
let result = one(dividedBy(two()))
console.log(result)
