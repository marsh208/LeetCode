class Solution {
    public int reverse(int x) {
        
        String myString = Integer.toString(x);
        int i_val;
        int isNeg;
        int myNum;
        if(myString.charAt(0) == '-'){
            isNeg = 1;
            i_val = 0;
        }else{
            i_val=-1;
            isNeg = 0;
        }
        String newString = "";
        for(int i = myString.length()-1; i > i_val; --i){
            newString+=myString.charAt(i);
        }
        try{
            myNum = Integer.valueOf(newString);
            if(isNeg == 1){
                myNum=myNum*-1;
            }
        }catch(NumberFormatException e){
            return 0;
        }
        
        
        return myNum;
    }
}
