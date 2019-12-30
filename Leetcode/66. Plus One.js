/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let stack = []

    // 一個元素 & < 9 --> +1後回傳
    if(digits[0] < 9 && digits.length === 1){
        digits[0] += 1
        return digits
    }
    while(digits.length){
        let temp = digits.pop() + 1
        // 要進位，推1個0進stack
        if(temp === 10){
            stack.push(0)
            continue
        }else{
            // 先把當下的+1完後的值推回去原digits，再從stack裡面把0一個個pop出來
            digits.push(temp)
            while(stack.length){
                digits.push(stack.pop())
            }
            return digits
        }
    }

    // 這裡是digits已經全pop出來還沒return的時候，代表要多進一位了，ex: 99 --> 100
    stack.push(1)
    return stack.reverse()
};

let a = [1,2,3,4,5]
let a_num = parseInt(a.join('')) + 1
a_num
// let str = [...a_num.toString()]
let str = Array.from(a_num.toString())
let result = str.map(i=>parseInt(i))
console.log(str)
console.log(result)
console.log(plusOne([9,9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
