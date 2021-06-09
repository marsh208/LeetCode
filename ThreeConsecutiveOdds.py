class Solution(object):
    def threeConsecutiveOdds(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        
        count = 0;
        
        for i in range(len(arr)):
            if arr[i] % 2  == 1:
                count = count + 1
                print(count)
                if count == 3:
                    return True
                else:
                    continue
            else:
                count = 0
            
        return False
