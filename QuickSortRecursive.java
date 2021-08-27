class Solution {
    public int[] sortArray(int[] nums) {
        int n = nums.length;
        qsort(nums,0,n-1);
        return nums;
    }
    
    public static void qsort(int[] nums,int low,int high){
        
        if(low < high){
            
            int pi = partition(nums, low, high);
            
            qsort(nums, pi+1, high);
            qsort(nums, low,pi-1);
            
        }
        
    }
    
    public static int partition(int[] nums,int low,int high){
        
        int pivot = nums[high];
        int i = low-1;
        
        for(int j = low; j < high; ++j){
            if(nums[j] <= pivot){
                i++;
                
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }            
        }
        
        int temp = nums[i+1];
        nums[i+1] = nums[high];
        nums[high] = temp;
        
        return i+1;
        
    }
}
