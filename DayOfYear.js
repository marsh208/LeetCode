/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    
    var year = parseInt(date.substring(0,5));
    if(year%4==0){
        var monthLengths = [31,29,31,30,31,30,31,31,30,31,30,31]
    }else{
        var monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31]
    }
    
    var totDays = 0;
    
    var month = parseInt(date.substring(5,7));
    var day = parseInt(date.substring(8));
    
    for(let i = 0; i < month-1; ++i){
        totDays += monthLengths[i];
    }
    
    totDays += day;

    return totDays;
    
};
