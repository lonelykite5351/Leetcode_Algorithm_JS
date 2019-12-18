// https://leetcode.com/problems/count-and-say/
// Runtime: 64 ms, faster than 32.99% of JavaScript online submissions for Count and Say.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1)
        return '1'
    let result = '1'
    let count = 1
    let temp = ''
    for(let i =2; i <= n; i++){
        for(let j=0; j<result.length; j++){
            if(result.charAt(j) === result.charAt(j+1)){
                count++
            }
            else{
                temp += count + result.charAt(j)
                count = 1
            }
        }
        result = temp
        temp = ''
    }
    return result
};

let str = 'abcdefg'
console.log(str.indexOf('b'))
console.log(str.charAt(2))
console.log(str[0])

console.log(countAndSay(7))