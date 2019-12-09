// https://www.codewars.com/kata/551f37452ff852b7bd000139

function addBinary(a,b) {
    
    return (a+b).toString(2)
    
    /*----短除法算法 (short division method)
    let sum = a + b
    let temp = []
    while(sum >= 1){
        temp.unshift(parseInt(sum%2))
        sum = parseInt(sum/2)
        if(sum == 1){
            temp.unshift(sum)
            break
        }
    }
    return temp.join('')
    */
}