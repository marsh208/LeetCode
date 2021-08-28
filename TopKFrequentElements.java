import java.util.*;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        
        Hashtable<Integer,Integer> numsHash = new Hashtable<Integer,Integer>();
        
        int[] frequentNums = new int[k];
        int currFrequency = 0;
        for(int i = 0; i < nums.length; ++i){
            int currNum = nums[i];
            try{
                currFrequency = numsHash.get(currNum);
            }catch(Exception e){
                currFrequency = 0;
            }
            numsHash.put(currNum, currFrequency+1);
            
        }
        
        int index = 0;
        
        while(index<k){
            int highestFrequency = 0;
            int numWithHighFreq = 0;
            Enumeration numbers;
            numbers = numsHash.keys();
            while(numbers.hasMoreElements()){
                int nextElem = (int)numbers.nextElement();
                if((int)numsHash.get(nextElem)>highestFrequency){
                    highestFrequency = (int)numsHash.get(nextElem);
                    numWithHighFreq = nextElem;
                }
            }
            
            frequentNums[index] = numWithHighFreq;
            numsHash.put(numWithHighFreq,0);
            index++;
            
        }
        
        return frequentNums;
        
    }
}
