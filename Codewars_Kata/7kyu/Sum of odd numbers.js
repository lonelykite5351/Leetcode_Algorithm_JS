// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
    let sum = 0
    let first_num = 1
    let end_num = 1
    let temp = 0
    for(let i=0; i<n; i++){
        first_num += temp
        temp += 2
    }
    end_num = first_num + (n-1)*2
    sum = ((first_num + end_num)*n)/2

    return sum
}