var relativeSortArray = function(arr1, arr2) {
    
    //法1：先從頭取arr2元素值，去遍歷arr1內元素
    //Runtime: 56 ms, faster than 8.53% of JavaScript online submissions for Relative Sort Array.
/*
    let newArr = []
    for(let arr2_value of arr2){
        for(let arr1_key in arr1){
            if(arr2_value === arr1[arr1_key]){

                //if相等push進newArr
                newArr.push(arr1[arr1_key])
                
                //刪除arr1該元素
                delete arr1[arr1_key]
                // arr1.splice(arr1_key,1)
            }
        }
    }
    
    //arr1中剩餘元素值遞增排列
    arr1.sort((a,b)=> a-b)

    //delete後的元素會形成undefined的空元素，利用filter來過濾
    arr1.filter(value => newArr.push(value))
    return newArr
*/

//------------------------------------------------------------

    //法2：建立Map，以Map的key具唯一的特性，value來計key的個數
    //Runtime: 56 ms, faster than 83.02% of JavaScript online submissions for Relative Sort Array.

    let newMap = new Map()

    // 先把arr2中的元素set進Map中，key值為arr2元素值，value值預設為0
    for(let arr2_value of arr2){
        newMap.set(arr2_value, 0)
    }
    // Map { 2 => 0, 1 => 0, 4 => 0, 3 => 0, 9 => 0, 6 => 0 } 

    //題目要求arr1元素剩下在arr2中沒有出現的要由小到大排序，因此以防萬一arr1先排序好
    arr1.sort((a,b)=>a-b)

    //遍歷arr1，只要Map裡面也有的值，Map中該key的value計數+1
    for(let arr1_value of arr1){
        if(newMap.has(arr1_value)){

            //存放該key的value
            let count = newMap.get(arr1_value)
            newMap.set(arr1_value, count + 1)
        }else{
            newMap.set(arr1_value, 1)
        }
    }
    // Map { 2 => 3, 1 => 1, 4 => 1, 3 => 2, 9 => 1, 6 => 1, 7 => 1, 19 => 1 } 

    let resultArray = []

    // 根據Map中key對應到的value計數，push相應個數的key進resultArray
    for(let [key,value] of newMap){
        let count = value
        while (count > 0) {
            resultArray.push(key)
            count--
        }
    }
    return resultArray
};
// arr1 = [28,6,22,8,44,17]
// arr2 = [22,28,8,6]
arr1 = [2,3,1,3,2,4,6,7,9,2,19]
arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2))

let myMap = new Map()
for(let value of arr2){
    myMap.set(value, 0)
}
