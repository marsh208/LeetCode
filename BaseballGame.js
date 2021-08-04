/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    
    var scores = [];
    var currentOp;
    var totScore = 0;
    
    for(let i = 0; i < ops.length; ++i){
        currentOp = ops[i];
        if(currentOp == "C"){
           scores.pop();
        }else if(currentOp == "D"){
           scores.push(parseInt(scores[scores.length-1])*2);
        }else if(currentOp == "+"){
           scores.push(parseInt(scores[scores.length-1])+parseInt(scores[scores.length-2]));
        }else{
           scores.push(parseInt(currentOp));
        }
    }
    
    for(let i = 0; i < scores.length; ++i){
        totScore+=scores[i];
    }
    
    return totScore;
};
