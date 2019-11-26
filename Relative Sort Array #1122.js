var relativeSortArray = function(arr1, arr2) {
    
    //法1：先從頭取arr2元素值，去遍歷arr1內元素
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
};
arr1 = [28,6,22,8,44,17]
arr2 = [22,28,8,6]
// arr1 = [2,3,1,3,2,4,6,7,9,2,19]
// arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2))

let myMap = new Map()
for(let value of arr2){
    myMap.set(value, 0)
}
