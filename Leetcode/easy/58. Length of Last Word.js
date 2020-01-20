// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let tempArr = s.split(' ')
    let result = tempArr.pop()
    while(result.length === 0 && tempArr.length !== 0){
        result = tempArr.pop()
    }
    return result.length
};

let str = 'Hello World '
strArray = str.split(' ')
// let len = strArray.pop()
console.log(strArray)
// console.log(len.length)
console.log(lengthOfLastWord(str))
