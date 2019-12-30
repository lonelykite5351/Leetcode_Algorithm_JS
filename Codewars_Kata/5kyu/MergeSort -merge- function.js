// TODO: implement 'mergesorted'
// test ensures: a and b are both arrays, consisting entirely of integers...
//...,both arrays are sorted and contain at least 1 integer.
// ALSO: the Array.sort function has been disabled for this excercise.
function mergesorted(a, b) {
    let sortArr = []

    // 比較兩陣列第一個元素，小的先提取後放進陣列，其中一個陣列取完了，跳出
    while(a.length && b.length){
        let min = (a[0] < b[0]) ? a.shift() : b.shift()
        sortArr.push(min)
    }
    sortArr = a.length ? sortArr.concat(a) : sortArr.concat(b)
    return sortArr
}


let a = [6,5,4,3,2,1]
let middle = Math.floor(a.length/2)
let left = a.slice(0, middle)
let right = a.slice(middle)

console.log(mergesorted([3,4,5,10],[1,2,6,8]))