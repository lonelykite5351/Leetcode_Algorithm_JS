// https://www.codewars.com/kata/kebabize/javascript

function kebabize(str) {

    // let temp = Array.from(str)
    str = [...str].map(word => word.replace(/-| /,'')).join('')
    let newStr =  str.replace(/[A-Z]/g , word => '-' + word.charAt(0).toLowerCase())
    newStr =  newStr.match(/(?!^-)+[a-z-]/g).join('')
    let temp = [...newStr]
    while(temp[0] == '-') { temp.shift() }
    return temp.join('')

/*------method 2--------

    return str.replace(/[^a-z]/ig, '').
        replace(/^[A-Z]/, c => c.toLowerCase()).
        replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);

*/
}

let regExp = /[A-Z]/g
let str = '-v--- -  -- Aa'
console.log(kebabize(str))

console.log(regExp.test(str))
console.log(str.match(regExp))

let str1 = str.replace(regExp, word => '-'+ word.charAt(0))
console.log(str1)