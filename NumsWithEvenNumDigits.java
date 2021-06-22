class Solution {
    public int findNumbers(int[] nums) {
        
        String numString = "";
        int currentNum;
        int evenCount = 0;
        
        for(int i = 0; i < nums.length; ++i){
            currentNum = nums[i];
            numString = Integer.toString(currentNum);
            if(numString.length() % 2 == 0){
                evenCount++;
            }
        }
        return evenCount;
        
    }
}
