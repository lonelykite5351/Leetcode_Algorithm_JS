/*
 * Complete the 'oddNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function oddNumbers(l, r) {
    let arr = []
    let new_l = l % 2 == 0 ? l+=1 : l
    while(new_l <= r){
        arr.push(new_l)
        new_l += 2
    }
    return arr
}

console.log(oddNumbers(2,15))

function test() {
    if(false){
        var x = 199
    }
    console.log(x)
}
test()