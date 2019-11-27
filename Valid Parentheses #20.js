/*
  @param {string} s
  @return {boolean}
*/

// 括號成對，Stack應用
var isValid = function(s) {
    let sArray = [...s]
    let stackArray = []
    // console.log(sArray)
    
    for(let symbol of sArray){

        switch (symbol){
            case "{": 
            case "[": 
            case "(":
                stackArray.push(symbol)
                continue
            case "}":
                if(stackArray.pop() !== "{") 
                    return false
                else 
                    continue
            case "]":
                if(stackArray.pop() !== "[") 
                    return false
                else 
                    continue
            case ")":
                if(stackArray.pop() !== "(") 
                    return false
                else 
                    continue
            default:
                continue
        }
    }

    if(stackArray.length === 0) 
        return true
    else 
        return false
};

console.log(isValid("{[]}"))
// Runtime: 48 ms, faster than 95.72% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 34.3 MB, less than 38.33% of JavaScript online submissions for Valid Parentheses.








// isValid("{[()]}")
console.log(isValid("["))
let str = "()[]{}"
console.log([...str])