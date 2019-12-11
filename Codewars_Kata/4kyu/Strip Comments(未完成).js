

function solution(input, markers) {
    let Reg = /#|!/
    while(Reg.test(input)){
        input = input.replace(RegExp, '')
    }
    return input
};


let str = "apples, pears # and bananas\ngrapes\nbananas !apples"
let RegExp = /#|!/
console.log(RegExp.test(str))
while(RegExp.test(str)){
    str = str.replace(RegExp, '')
}
// console.log(str)
console.log(solution(str,["%", "!"]))
