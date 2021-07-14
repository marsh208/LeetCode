/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var currentElem;
    var count;
    var arrLength = nums.length;
    
    for(let i = 0; i < arrLength; ++i){
        currentElem = nums[i];
        count=0;
        for(let j = 0; j < arrLength; ++j){
            if(nums[j] == currentElem || j == i){
                count++;
                if(count>arrLength/2){
                    return currentElem;
                }
            }
        }
    }
    return 0;
};
