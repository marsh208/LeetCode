class Solution {
    public String intToRoman(int num) {
        
        String[] roman = {"M","CM", "D", "CD", "C","XC", "L", "XL","X", "IX","V","IV","I"};
		int[] nums = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
        int i = 0;
        String romanWord = "";
        
        while(num > 0 && i < nums.length){
            
            if(num < nums[i]){
                i++;
                continue;
            }
            
            romanWord += roman[i];
            num -= nums[i];
            
            
        }
        
        return romanWord;
        
        
    }
}
