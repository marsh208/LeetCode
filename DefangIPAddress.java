class Solution(object):
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """
        newAddr = ""
        
        for symb in address:
            if(symb == '.'):
                newAddr=newAddr+'[.]'
            else:
                newAddr=newAddr+symb
        
        return newAddr
        
