class Solution {
    public int maxArea(int[] height) {
        
        int max_area = 0;
        int current_area = 0;
        
        for(int left = 0; left < height.length-1; ++left){
            for(int right = height.length-1; right > left; --right){
            
                if(height[left] >= height[right]){
                    current_area = height[right]*(right-left);

                }else if(height[right] > height[left]){
                    current_area = height[left]*(right-left);
                }

                if(current_area > max_area){
                    max_area = current_area;
                }
            }
        }
    
        return max_area;    
        
    }
}
