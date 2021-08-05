/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    
    var newSentence = "";
    var updatedSentence = sentence;
    var firstSpace;
    var currentWord;
    var updatedWord;
    var wordNumber = 0;
    var aToAdd = "";
    
    while(updatedSentence.length != 0){
        wordNumber++;
        aToAdd = "";
        firstSpace = updatedSentence.indexOf(' ');
        if(firstSpace == -1){
            currentWord = updatedSentence.substring(0);
        }else{
            currentWord = updatedSentence.substring(0,firstSpace);
        }
        if(currentWord.charAt(0).toLowerCase() == 'a' || currentWord.charAt(0).toLowerCase() == 'e' || currentWord.charAt(0).toLowerCase() == 'i' || currentWord.charAt(0).toLowerCase() == 'o' || currentWord.charAt(0).toLowerCase() == 'u'){
            updatedWord = currentWord + "ma";
        }else{
            updatedWord = currentWord.substring(1)+currentWord[0]+"ma";
        }
        
        for(let i = 0; i < wordNumber; ++i){
            aToAdd = aToAdd + 'a';
        }
        
        updatedWord = updatedWord + aToAdd;
        
        if(firstSpace == -1){
            updatedSentence = "";
            newSentence = newSentence + updatedWord;
            break;
        }else{
            updatedSentence = updatedSentence.substring(firstSpace+1);
            newSentence = newSentence+ updatedWord + " ";

        }

    }
    return newSentence;
};
