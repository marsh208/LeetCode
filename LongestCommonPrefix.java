class Solution {
    public String longestCommonPrefix(String[] strs) {
        
        int short_length = Integer.MAX_VALUE;
        int strLengths[] = new int[strs.length];
        String longPrefix = "";
        if(strs.length == 0){
            return "";
        }
        for(int i = 0; i < strLengths.length; ++i){
            strLengths[i] = strs[i].length();
            System.out.println(strLengths[i]);
        }
        
        for(int i = 0; i < strLengths.length; ++i){
            if(strLengths[i] < short_length){
                short_length = strLengths[i];
            }
        }

        for(int i = 0; i < short_length; ++i){
            char current_letter = strs[0].charAt(i);
            System.out.println(current_letter);
            for(int j = 0; j < strs.length; ++j){
                if(current_letter == strs[j].charAt(i)){
                    continue;
                }
                else{
                    return longPrefix;
                }
            }
            longPrefix += current_letter;
        }        
        return longPrefix;
    }
}
