let myMap = new Map()

var KeyString = 'String_1'
var keyObj = {}
var keyFunc = function() {}
var keyNum = 1

myMap.set(KeyString,'str1')
myMap.set(keyObj, {obj: 1})
myMap.set(keyFunc, function(){console.log('I am function')})
myMap.set(keyNum , 100)

console.log(myMap.has(keyFunc))
console.log(myMap.size)
console.log(myMap.get(keyNum))
console.log(myMap.has(KeyString))
// myMap.delete(KeyString)
// console.log(myMap.has(KeyString))
// console.log(myMap)
// myMap.clear()
// console.log(myMap)


for(let [key, value] of myMap){
    console.log(`key：${key}, value：${value}`)
}
for (let [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
  }

//---------------------------------------

let arr = ['a','b','c','d','e']
for(let index in arr){
    console.log(index)
    console.log(arr[index])
}
arr.name='myArray'
for(let index in arr){
    console.log(index)
    console.log(arr[index])
}
for(let value of arr){
    console.log(value)
}

let obj = {
    a:'a_value',
    b:'b_value', 
    c:'c_value'
}

for(let key in obj){
    console.log(key)
    console.log(obj[key])
}

for(let key of Object.keys(obj)){
    console.log(key)
    console.log(obj[key])
}

let complexArray = [
    {
        name:'A先生',
        birth:'1995/07/01'
    },
    {
        name:'B先生',
        birth:'1989/11/17'
    },
    {
        name:'C先生',
        birth:'1990/06/25'
    }
]

for(let obj of complexArray){
    console.log(obj)
    for(let key in obj){
        console.log(obj[key])
    }
}
