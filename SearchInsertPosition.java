class Solution {
    public int searchInsert(int[] nums, int target) {
        if(nums[0] > target){
            return 0;
        }
        for(int i = 0; i < nums.length; ++i){
            if(nums[i] == target){
                return i;
            }
            else if(i == nums.length-1){
                return i+1;
            }
            else if(nums[i] < target && nums[i+1] > target){
                return i+1;
            }
            else{
                continue;
            }
        }
        return 0;
    }
}
