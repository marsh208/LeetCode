class Solution(object):
    def findLucky(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        indexOut = -1
        indexIn = -1
        count = 0
        
        maxNum = 0
        
        luckyNums = []
        
        for currNum in arr:
            indexOut = indexOut + 1
            count=0
            for otherNum in arr:
                indexIn = indexIn + 1
                
                if currNum == otherNum:
                    count=count+1
            
            if count == currNum:
                luckyNums.append(currNum)
                
        if len(luckyNums) == 0:
            return -1
        
        for num in luckyNums:
            if num > maxNum:
                maxNum = num
                
        
        return maxNum
