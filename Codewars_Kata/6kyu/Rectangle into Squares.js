// https://www.codewars.com/kata/55466989aeecab5aac00003e

function sqInRect(lng, wdth){
    
    if(lng == wdth)
        return null
    let result = []
    while(lng > 0 && wdth > 0){
        result.push( lng < wdth ? lng : wdth )
        lng < wdth ? wdth-=lng : lng-=wdth 
    }
    return result
    
    
/*-----method 1    
    if(lng == wdth)
        return null
    let min = Math.min(lng, wdth)
    let max = Math.max(lng, wdth)
    let result = []
    let temp = 0
    while(max !== min){
        if(max - min < min){
            result.push(min)
            temp = min
            min = max - min
            max = temp
        }else{
            max = max - min
            result.push(min)
        }
    }
    result.push(min)
    return result
*/
}