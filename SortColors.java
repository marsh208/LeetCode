class Solution {
    public void sortColors(int[] nums) {
        
        if(nums.length == 1){
            return;
        }
        
        int min_idx;
        
        for(int i = 0; i < nums.length-1; ++i){
            min_idx = i;
            
            for(int j = i + 1; j < nums.length; ++j){
                if(nums[j] < nums[min_idx]){
                    min_idx = j;
                }
            }
            
            int temp = nums[min_idx];
            nums[min_idx] = nums[i];
            nums[i] = temp;
        
        }
        
        
    }
}
