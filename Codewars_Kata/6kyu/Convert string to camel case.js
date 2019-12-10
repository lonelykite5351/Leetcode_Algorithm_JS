// https://www.codewars.com/kata/convert-string-to-camel-case/javascript

function toCamelCase(str){

    let regExp = /[-_]\w/g
    return str.replace(regExp, match => match.charAt(1).toUpperCase())

/*------method 1

    if(str.length==0)
        return ''
    let str_split = []
    switch (true) {
        case str.indexOf('-') !== -1:
            str_split = str.split('-')
            for(let i=1; i < str_split.length; i++){
                let temp = str_split[i].substring(0,1).toUpperCase() + str_split[i].substr(1)
                str_split[i] = temp
            }
            return str_split.join('')

        case str.indexOf('_') !== -1:
            str_split = str.split('_')
            for(let i=1; i < str_split.length; i++){
                let temp = str_split[i].substring(0,1).toUpperCase() + str_split[i].substr(1)
                str_split[i] = temp
            }
            return str_split.join('')
        default:
            return str
    }
*/
}


//--------------以下是測試內容

toCamelCase('the_stealth_warrior')
console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_Stealth_Warrior'))


let str1 = "the-stealth-warrior"
let str2 = "The_Stealth_Warrior"
console.log(str1.slice(0,5))

let str1_split = str1.split('-')
console.log(str1_split)
console.log(str1_split[1].substring(0,1).toUpperCase() + str1_split[1].substr(1))
console.log(str1_split[1].substr(1))
console.log(str2.split('_').join('').substring(0,1).toUpperCase())

let RegExp = /[-_]\w/g
console.log(RegExp.test(str1))
console.log(str1.match(RegExp))
let newRES = str1.replace(RegExp, match => match.charAt(1))
console.log(newRES)

let money = '2000'
let moneyReg = /^\$?\d+(,\d{3})*(\.\d*)?$/
console.log(money.match(moneyReg))
console.log(money.search(moneyReg))
console.log(money.replace(moneyReg,''))
