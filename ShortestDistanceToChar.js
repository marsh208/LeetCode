/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
    var distances = [];
    var Shortest = 100000;
    var distLeft;
    var distRight;
    var strLeft;
    var strRight;
    var countLeft = 0;
    var countRight = 0;
    
    for(let i = 0; i < s.length; ++i){
        distLeft = 100000;
        distRight = 100000;
        countLeft = 1;
        countRight = 1;
        
        if(s.charAt(i) == c){
            distances.push(0);
            continue;
        }
        
        if(i == 0){
            strLeft=""
            strRight=s.substr(i+1);
        }else if(i == s.length-1){
            strLeft=s.substr(0,i);
            strRight="";
        }else{
            strLeft=s.substr(0,i);
            strRight=s.substr(i+1);
        }

        /*Loop to look left*/
        for(let j = i-1; j >= 0; --j){
            if(s.charAt(j) == c){
                distLeft = countLeft;
                break;
            }
            countLeft++;
        }
        
        
        /*Loop to look right*/
        for(let j = i+1; j < s.length; ++j){
            if(s.charAt(j) == c){
                distRight = countRight;
                break;
            }
            countRight++;
        }
        
        if(distLeft <= distRight){
            distances.push(distLeft);
        }else{
            distances.push(distRight);
        }
        
    }
    return distances;
};
