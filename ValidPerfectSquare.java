class Solution {
    public boolean isPerfectSquare(int num) {
        
        for(int i = 1; i < 808202; i++){
            if(i*i == num){
                return true;
            }
        }
        return false;
    }
}
