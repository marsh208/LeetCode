class Solution {
    public int[] sortArrayByParityII(int[] nums) {
        
        int[] sorted = new int[nums.length];
        
        for(int i = 0; i < nums.length; ++i){
            
            if(nums[i] % 2 == 0){
                System.out.println("here1");
                for(int j = 0; j < sorted.length; j+=2){
                    if(sorted[j] == 0){
                        sorted[j] = nums[i];
                        break;
                    }
                }
            }
            else{
                System.out.println("here2");
                for(int j = 1; j < sorted.length; j+=2){
                    if(sorted[j] == 0){
                        sorted[j] = nums[i];
                        break;
                    }
                }
            }
        }
            
        return sorted;
        
    }
}
