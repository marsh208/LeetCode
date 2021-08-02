/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var currentNum1;
    var currentNum2;
    var index1;
    var index2;
    
    var targets = [];
    
    for(let i = 0; i < nums.length; ++i){
        currentNum1 = nums[i];
        for(let j = nums.length; j > 0; --j){
            if(i == j){
                j--;
                continue
            }
            currentNum2 = nums[j];
            if(currentNum1 + currentNum2 == target){
                index1 = i;
                index2 = j;
                targets.push(index1);
                targets.push(index2);
                return targets;
            }
        }
    }
    
};
