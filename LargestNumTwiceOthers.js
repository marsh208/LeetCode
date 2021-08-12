/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    if(nums.length == 1){
        return 0;
    }
    
    var max = 0;
    var maxIndex;
    
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] > max){
            max=nums[i];
            maxIndex = i;
        }
    }
    
    nums.sort(function(a, b){return a - b});
    console.log(nums);
    
    if(nums[nums.length-2]*2 <= nums[nums.length-1]){        
        return maxIndex;
    }else{
        return -1;
    }
    
};
