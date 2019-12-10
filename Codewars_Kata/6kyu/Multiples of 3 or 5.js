//  https://www.codewars.com/kata/multiples-of-3-or-5/javascript

function solution(number){
    let resultSet = new Set()
    let i = 1
    let sum = 0
    while(i * 3 < number){
        resultSet.add(i*3)
        i++
    }

    i = 1
    while(i * 5 < number){
        resultSet.add(i*5)
        i++
    }

    for(let value of resultSet){
        sum += value
    }
    return sum
}

//--------- 以下是測試區
console.log(solution(50))

let newSet = new Set()
newSet.add(1)
newSet.add(2)
newSet.add(3)
newSet.add(2)
newSet.add(3)
console.log(newSet)
let sum = 0

// for(let value of newSet){
//     sum += value
// }

let a = 50
console.log()

sum = newSet.forEach(value=> sum+=value)
console.log(sum)