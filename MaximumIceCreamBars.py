class Solution(object):
    def maxIceCream(self, costs, coins):
        """
        :type costs: List[int]
        :type coins: int
        :rtype: int
        """
        
        
        totCoins = coins
        numIcecreams = 0
        myCosts = costs
        
        myCosts.sort()
    
        for cost in myCosts:
            totCoins = totCoins - cost
            if(totCoins >= 0 and len(myCosts) > 0):
                numIcecreams = numIcecreams + 1
            else:
                break

        return numIcecreams
        
        
        
