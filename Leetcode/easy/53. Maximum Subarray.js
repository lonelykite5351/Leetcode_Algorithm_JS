// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
/*
    法1：Dynamic Programming 的 Kadane's演算法
    https://youtu.be/2MmGzdiKR9Y?t=806

        [ -2 , 1 , -3 , 4 , -1 , 2 , 1 , -5 , 4 ]
    s1:   -2
    s2:   -2 , max(1,-2+1=-1) 
    s3:   -2 , 1 , max(-3,1+(-3)=-2)
    s4:   -2 , 1 , -2 .........

    --說明--> nums[i] & (nums[i] + nums[i-1])
    當下值與前一項累加後的值做比較，如果當下值nums[i]較大表示需要重新計算，則選擇nums[i]
    如果前一值較大則表示前面累加後的結果依然大於當下值，nums[i] + nums[i-1]相加後繼續計算累加
*/
    let max = 0
    let result = nums[0]
    for(let i in nums){
        max = Math.max(max += nums[i], nums[i])
        result = Math.max(result, max)
    }
    return result
};

let arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))
