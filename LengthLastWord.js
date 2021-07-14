/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var lastWordStart;
    var trimmedWord = s.trim();
    if(trimmedWord.length == 0){
        return 0;
    }
    lastWordStart = trimmedWord.lastIndexOf(' ')+1;

    if (lastWordStart == 0){
        return trimmedWord.length;
    }
    else{
        var lastWord=trimmedWord.substring(lastWordStart);
        return lastWord.length;
    }
    return 0;
};
