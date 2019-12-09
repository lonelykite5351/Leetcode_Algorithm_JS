// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
    // can not : null.length
    if(!array1 || !array2){
        return false
    }
    if(array1.length !== array2.length){
        return false
    }else{
        sortArray1 = array1.sort((a,b)=>a-b)
        sortArray2 = array2.sort((a,b)=>a-b)
        for(let i in array1){
            if(sortArray1[i]**2 !== sortArray2[i])
                return false
            else
                continue
        }
    }
    return true
}