class Solution {
    public String reverseWords(String s) {
        
        String currWord = "";
        ArrayList<String> myWords = new ArrayList<String>();
        char currChar;
        String newPhrase = "";
        
        for(int i = s.length()-1; i >=0; --i){
            currChar = s.charAt(i);
            if(Character.isLetter(currChar) || Character.isDigit(currChar)){
                currWord += currChar;
                if(i == 0){
                    myWords.add(currWord);
                }
            }else{
                myWords.add(currWord);
                currWord = "";
            }
            
        }
        
        for(int i = 0; i < myWords.size(); ++i){
            if(myWords.get(i) == ""){
                continue;
            }else{
                newPhrase += reverse(myWords.get(i)) + " ";
            }
            
        }
        
        return newPhrase.substring(0,newPhrase.length()-1);
        
    }
    
    public static String reverse(String word){
        String reverseWord = "";
        for(int i = word.length()-1; i >= 0; --i) {
            reverseWord += word.charAt(i);
        }
        return reverseWord;
    }
}
