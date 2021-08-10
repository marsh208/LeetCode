/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    var answer = [];
    
    for(let i = 1; i <= n; ++i){
        answer[i-1]= "";
        if(i%3 == 0){
            answer[i-1] = "Fizz";
        } 
        if(i%5 == 0){
            answer[i-1] += "Buzz";
        }
        if(i%5 != 0 && i%3 != 0){
            answer[i-1] = i.toString();
        }
    }
    return answer;
    
};
