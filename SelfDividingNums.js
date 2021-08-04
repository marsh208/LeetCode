/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    var curretNumStr = "";
    
    var selfDividers = [];
    
    var isSelfDivider = true;
    
    for(let i = left; i <= right; ++i){
        currentNumStr = i.toString();
        isSelfDivider = true;
        if(currentNumStr.length == 1){
            selfDividers.push(i);
            continue;
        }
        for(let j = 0; j < currentNumStr.length; ++j){
            if(i%parseInt(currentNumStr[j]) != 0){
                isSelfDivider = false;
                break;
            }
        }
        if(isSelfDivider){
            selfDividers.push(i);
        }
    } 
    return selfDividers;
};
