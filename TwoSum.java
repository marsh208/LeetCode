class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] indiciesList = new int[2];
        for(int i=0; i < nums.length; i++){
            for(int j=1; j < nums.length; j++){
                if(i == j){
                    continue;
                }
                if(nums[i]+nums[j] == target)
                {
                    System.out.println("i:" + i + "and j:" + j);
                    indiciesList[0]=j;
                    indiciesList[1]=i;
                    return indiciesList;
                }
            }
        }
        return indiciesList;
    }
}
