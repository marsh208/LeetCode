/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    
    var newWord = "";
    
    for(let i = 0; i < words.length; ++i){
        if(newWord.length == s.length){
            break;
        }
        else if(s.indexOf(words[i]) != -1){
            newWord += words[i];
        }else{
            break;
        }
    }
    console.log(newWord);
    if(newWord == s){
        return true;
    }else{
        return false;
    }
    
};
