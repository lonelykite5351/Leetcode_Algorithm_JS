// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr)
{
    let leftSum = 0
    let rightSum = arr.reduce((a,b) => a+b)
    let currentValue = 0
    
    for(let index=0 ; index < arr.length ; index++){
        leftSum += currentValue
        currentValue = arr[index]
        rightSum -= currentValue
        if(leftSum == rightSum)
            return index
    }
    return -1
    
  /*------or
    
    let leftSum = 0
    let rightSum = arr.reduce((a,b) => a+b)
    rightSum -= arr[0]
    if(leftSum == rightSum)
        return 0
    for(let index=1 ; index < arr.length ; index++){
        leftSum += arr[index-1]
        rightSum -= arr[index]
        if(leftSum == rightSum)
            return index
    }
    return -1
    
  */
}