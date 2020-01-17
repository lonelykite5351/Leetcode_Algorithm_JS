// 遞迴練習

function recur(n) {
    if(n == 0 || n == 1){
        return 1;
    }
/*
    let result = n
    while (n > 1) {
        result = result * (n - 1)
        n--
    }
    return result
*/
    return n * recur(n - 1)
}

console.log(recur(5))  // 120


//------------------------------------------------

// 1 + 2 + 3 + .....+ n
function add(n) {
    if(n === 0)
        return 0
    return n + add(n - 1)
}
console.log(add(4))
/*
    step1: 4 + add(3)
    step2: 4 + 3 + add(2)
    step3: 4 + 3 + 2 + add(1)
    step4: 4 + 3 + 2 + 1 + add(0)
    step5: 4 + 3 + 2 + 1 + 0
*/

//------------------------------------------------
// 階乘

function factorial(n) {
    if(n === 1){
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))