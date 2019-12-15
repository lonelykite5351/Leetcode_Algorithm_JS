// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message){
    let orign = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890!+.')
    let r13 = Array.from('NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm 1234567890!+.')
    let result = Array.from(message).map(word => r13[orign.indexOf(word)]).join('')
    return Array.from(message)
}

// var alphabet = new Map([['A','N'],['B','O']])
console.log(rot13('te st'))
let str = 'ABCDEFG'
let str2 = [...str].map(word=>word+'...').join('')
console.log(str2)