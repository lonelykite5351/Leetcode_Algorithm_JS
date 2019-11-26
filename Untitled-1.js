//迴文 Palindrome
var isPalindrome = function(x) {
    // 法1
    if (x < 0 || ( x % 10 == 0 && x != 0)){
        return false
    }
    reverse_x = 0
    while(x > reverse_x){
        reverse_x = reverse_x *10 + x % 10
        x = parseInt(x / 10)
    }
    return (x == reverse_x || x == parseInt(reverse_x / 10)) ? true : false
    
    //法2
    // if (x < 0 || ( x % 10 == 0 && x != 0)){
    //     return false
    // }
    // else if(x<=9){
    //     return true
    // }else{
    //     let temp = 0
    //     let origin_x = x
    //     let array = []
    //     while(origin_x > 0){
    //          temp = origin_x % 10
    //          array.push(temp)
    //          if(origin_x <= 9){break}
    //          origin_x = parseInt(origin_x / 10)
    //     }
    //     let newArray = parseInt(array.join(''))
    //     return newArray == x ? true : false
    // }
};
console.log(isPalindrome(121))

// ----------------------------------------

// 羅馬數字轉整數
var romanToInt = function(s) {
    let symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let ss = s.split("")
    let num = 0
    // console.log(symbols[ss[1]])
    for(let i = 0; i < ss.length; i++){
        if(symbols[ss[i+1]] > symbols[ss[i]]){
            num += (symbols[ss[i+1]] - symbols[ss[i]])
            i++
        }else{
            num += symbols[ss[i]]
        }
    }
    return num
    
};
console.log(romanToInt("IV"))

// ----------------------------------------

// 最長共同字串(從字首) Longest Common Prefix
var longestCommonPrefix = function(strs) {
    firstStr = strs[0]
    same = ""
    if(strs == null || strs.length == 0){
        return same
    }
    else if(strs.length == 1){
        same = firstStr
        return same
    }

    // 首不同直接return
    for(let i = 1; i < strs.length; i++){
        if(firstStr.slice(0,1) != strs[i].slice(0,1)){
            return same
        }
    }
    same = firstStr
    for(let i = 1; i < strs.length; i++){
        for(let j = 1;  j <= same.length; j++){
            if(same.slice(0,j) == strs[i].slice(0,j)){
                continue
            }else{
                j--
                same = strs[i].slice(0,j)
                break
            }
        }
    }
    return same
};

var str = [""]
console.log(str.length)
console.log(longestCommonPrefix(str))

//-------------------------------------

var sortArrayByParity = function(A) {
    // var B = []
    // A.forEach((items)=>{
    //     if(items%2 == 0){
    //         B.unshift(items)
    //     }else{
    //         B.push(items)
    //     }
    // })
    // return B

    // for(var i=0;i<A.length;i++){
    //     if(A[i]%2==0){
    //         var temp = A[i]
    //         A.splice(i,1)
    //         A.unshift(temp)
    //     }
    // }

    // return A

    let i = 0
    let j = A.length-1
    while( i<j ){
        if(A[i] %2 > A[j] %2){
            let tep = A[i]
            A[i] = A[j]
            A[j] = tep
        }
        if(A[i] %2 == 0)
            i++
        if(A[j] %2 == 1)
            j--
    }
    return A
};
console.log(sortArrayByParity([3,1,2,4]))

//------------------------------------------
let myset1 = new Set(['a','b','c','d'])
let myset2 = new Set(['c','d','e','f'])
let newSet = new Set([...myset1,...myset2])
console.log(newSet)

const array1 = [1,2,3]
const ss = "hello world"
const array2 = [4,5,6]
const array3 = [...array1 , ...array2]
const array4 = ['加在前面',...ss,'加在後面']
const [x,y,...z] = [...ss]
console.log(z)

const sum = (...numbers)=>{
    let result = 0
    numbers.forEach((num)=>{
        result += num
    })
    return result
}
console.log(sum(1))
console.log(sum())

const aFunc = (x,y,...z)=>{
    console.log('x=',x , 'y=',y , 'z=',z)
}
aFunc()


function aaa() {
    var abc = '這是var變數'
    let j = '這是let變數'
    console.log(abc,j)
    {
        var cc = '裡面var'
        let ccc = '裡面let'
        console.log(ccc)
    }
    console.log(cc)
    console.log(ccc)
}
aaa()