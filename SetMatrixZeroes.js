/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    var zeros = [];
    var zeroRow;
    var zeroCol;
    
    console.log(matrix[0].includes(0));
    if(matrix.length == 1){
        if(matrix[0].includes(0) == true){
            for(let i = 0; i < matrix[0].length; ++i){
                matrix[0][i] = 0;
            }
            return matrix;
        }else{
            return matrix;
        }
    }
    if(matrix[0].length == 1){
        for(let j = 0; j < matrix.length; ++j){
            if(matrix[j][0] == 0){
                for(let i = 0; i < matrix.length; ++i){
                matrix[i][0] = 0;
                }
                return matrix;
            }
        }
        return matrix;
    }

    for(let row = 0; row < matrix.length; ++row){
        for(let col = 0; col < matrix[0].length; ++col){
            if(matrix[row][col] == 0){
                zeros.push([row,col]);
            }
        }
    }
    
    console.log(zeros);
    
    for(let i = 0; i < zeros.length; ++i){
        zeroRow = zeros[i][0];
        zeroCol = zeros[i][1];
        for(let row = 0; row < matrix.length; ++row){
            matrix[row][zeroCol] = 0;
        }
        for(let col = 0; col < matrix[0].length; ++col){
            matrix[zeroRow][col] = 0;
        }
    }
    return matrix;
    
};
