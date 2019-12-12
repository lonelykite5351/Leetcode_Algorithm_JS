//   https://www.codewars.com/kata/primes-in-numbers/javascript

function primeFactors(n){
    let resultArr = []
    const isPrimeNum = num => {
        let n = parseInt(num ** 0.5) 
        for(let i=2; i<=n; i++){
            if(num%i == 0)
                return false
        }
        return true
    }

    for(let i=2; i <= n; i++){
        if(isPrimeNum(i)){
            while(n % i === 0){
                resultArr.push(i)
                n /= i
            }
        }
    }

    let result = ''
    let count = 1
    for(let i=0; i < resultArr.length; i++){
        if(resultArr[i] === resultArr[i+1])
            count++
        else if(count === 1)
            result += `(${resultArr[i]})`
        else{
            result += `(${resultArr[i]}**${count})`
            count = 1
        }
    }
    return result
}


const isPrimeNum = num => {
    if(num <= 1)
        return false
    let n = parseInt(num ** 0.5) 
    for(let i=2; i<=n; i++){
        if(num%i == 0)
            return false
    }
    return true
}
console.log(7775460**0.5)
console.log(17**2)
console.log(isPrimeNum(3))
console.log(primeFactors(7775460))  // "(2**2)(3**3)(5)(7)(11**2)(17)"

let i = 0
let arr = [2,2,2,2,2,5,7,7,11]
arr.find(e=>e===e?i++:'')
console.log(!arr[0])