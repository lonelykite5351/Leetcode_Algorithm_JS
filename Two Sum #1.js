//Runtime: 60 ms, faster than 71.16% of JavaScript online submissions for Two Sum.
//Memory Usage: 36.2 MB, less than 11.99% of JavaScript online submissions for Two Sum.

var twoSum = function(nums, target) {
    let newMap = new Map()
    for(let nums_index in nums){

    //  第二元素開始，每次先檢查nums元素有沒有已存在Map的key值
    //  有的話代表已找到配對，先回傳該key的value(即原nums陣列索引值)，再回傳當下遍歷到的nums_index
        if(newMap.has(nums[nums_index])){
            let first_index = newMap.get(nums[nums_index])
            return [first_index , nums_index]

    //  第一個元素會先跑else，target - nums[0]相減後放進Map的key，value紀錄nums元素索引值
    //  Map { 7=>0 , 2=>7 }
        }else{
            numInt = target - nums[nums_index]
            newMap.set(numInt, nums_index)
        }
    }
};

console.log(twoSum([2, 7, 11, 15],9))