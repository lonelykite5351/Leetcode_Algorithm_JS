// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    let len = 1
    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[len] = nums[i]
            len += 1
        }        
    }
    return len

// -------Set作法(不通過)
//     return [...new Set(nums)]
};
let res = removeDuplicates([1,1,2])
console.log(res)
