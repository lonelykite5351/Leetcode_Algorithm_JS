// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){

    // method 1 short
    return parseInt( n.toString().split('').sort((a,b)=>b-a).join('') )

/*----method 1
    n = n.toString()
    let temp = [...n]
    temp.sort((a,b)=>b-a)
    temp = temp.join('')
    n = parseInt(temp)
    return n
    */
}