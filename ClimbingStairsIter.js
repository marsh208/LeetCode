/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    
    var ways = [];
    ways[0] = 1;
    ways[1] = 2;
    
    
    for(let i = 3; i <= n; ++i){
        ways.push(ways[i-3] + ways[i-2]);
    }
    return ways[n-1];
    
};
