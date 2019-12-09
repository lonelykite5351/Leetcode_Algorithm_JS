// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(strWords){
    return strWords.split(' ')
    .map(word => (word.length>=5) ? word.split('').reverse().join('') : word)
    .join(' ')
    

    /*----method 1
    let strArray = strWords.split(' ')
        let tempWord = ''

        for(let i in strArray){
            if(strArray[i].length < 5){
                continue
            }else{
                let j = strArray[i].length-1
                while(j>=0){
                    tempWord += strArray[i].charAt(j)
                    j--
                }
                strArray[i] = tempWord
                tempWord = ''
            }
        }
        let result = strArray.join(' ')
        return result
    */
}