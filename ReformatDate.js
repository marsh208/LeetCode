/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    
    var day_word;
    var month_word;
    var year_word;
    
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    var date_index = date.indexOf('s');
    if(date_index>2 || date_index==-1){
        var date_index = date.indexOf('n');
    }
    if(date_index>2 || date_index==-1){
        var date_index = date.indexOf('t');
    }
    if(date_index>2 || date_index==-1){
        var date_index = date.indexOf('r');
    }
    
    var day = date.substring(0,date_index);
    
    var month = date.substring(date_index+3,date_index+6);
    
    var year = date.substring(date_index+7);
    
    if(parseInt(day) < 10){
        day_word = "0"+day;
    }else{
       day_word = day.toString(); 
    }
    
    for(let i = 1; i <= months.length; ++i){
        if(month == months[i-1]){
            month = (i).toString();
        }
    }
    
    if(parseInt(month) < 10){
        month_word = "0"+month;
    }else{
       month_word = month.toString(); 
    }
    
    year_word = year.toString();
    
    return year_word+'-'+month_word+'-'+day_word;
};
