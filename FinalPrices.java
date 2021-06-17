class Solution {
    public int[] finalPrices(int[] prices) {
        
        int[] newPrices = new int[prices.length];
        int currentPrice = 0;
        
        for(int i = 0; i < newPrices.length; ++i){
            newPrices[i] = prices[i];
        }
        
        for(int i = 0; i < prices.length-1; ++i){
            currentPrice = prices[i];
            for(int j = i+1; j < prices.length; ++j){
                if(currentPrice >= newPrices[j]){
                    newPrices[i] = currentPrice - newPrices[j];
                    j = 0;
                    break;
                }
            }
        }
        
        return newPrices;
        
    }
}

