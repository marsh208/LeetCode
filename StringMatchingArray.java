class Solution {
    public List<String> stringMatching(String[] words) {
        
        String currentWord = "";
        List<String> subWords = new ArrayList<String>();

        for(int i = 0; i < words.length; ++i){
            currentWord = words[i];
            for(int j = 0; j < words.length; ++j){
                if(j != i && words[j].contains(currentWord)){
                    subWords.add(currentWord);
                    break;
                }
            }
        }
        return subWords;
        
    }
}
