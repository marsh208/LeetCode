/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    nums.sort(function(a, b) {
      return a - b;
    });
    
    if(nums.length == 1){
        return nums[0];
    }

    for(let i = 1; i <= nums.length; i+=2){
        console.log(i);
        if(nums[i-1] != nums[i]){
            return nums[i-1];
        }
    }
};
