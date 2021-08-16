/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    
    if(s.length == 0 || s.length == 1){
        return -1;
    }
    
    var indicies = [];
    var largestNum = 0;
    
    indicies[0] = s.indexOf(0);
    indicies[1] = s.indexOf(1);
    indicies[2] = s.indexOf(2);
    indicies[3] = s.indexOf(3);
    indicies[4] = s.indexOf(4);
    indicies[5] = s.indexOf(5);
    indicies[6] = s.indexOf(6);
    indicies[7] = s.indexOf(7);
    indicies[8] = s.indexOf(8);
    indicies[9] = s.indexOf(9);
    
    for(let i = 9; i >= 0; --i){
        if(indicies[i] !== -1){
            largestNum = i;
            break;
        }
    }
        
    for(let i = largestNum-1; i >= 0; --i){
        if(indicies[i] != -1){
            return i;
        }
    }
    return -1;
    
    
};
