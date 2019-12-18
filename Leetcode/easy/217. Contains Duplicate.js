/*
    Given an array of integers, find if the array contains any duplicates.

    Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

    Example 1:
    Input: [1,2,3,1]
    Output: true
    
    Example 2:
    Input: [1,2,3,4]
    Output: false
    
    Example 3:
    Input: [1,1,1,3,3,4,3,2,4,2]
    Output: true

*/

var containsDuplicate = function(nums) {
    //集合的概念，集合的值皆不重複
    return new Set(nums).size < nums.length
};

let mySet = new Set([1,2,3,1])
console.log(mySet.size)
console.log([1,2,3,1].length)
console.log(containsDuplicate([1,2,3,4]))