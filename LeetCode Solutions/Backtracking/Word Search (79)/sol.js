/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function recur(i, j, board, row, col, word, curr){
    if(curr == word.length) return true
    if(i < 0 || j < 0 || i == row || j == col || board[i][j] != word[curr]){
        return false
    }
    let currChar = board[i][j]
    board[i][j] = '#'
    let op1 = recur(i + 1, j, board, row, col, word, curr + 1)
    let op2 = recur(i, j + 1, board, row, col, word, curr + 1)
    let op3 = recur(i - 1, j, board, row, col, word, curr + 1)
    let op4 = recur(i, j - 1, board, row, col, word, curr + 1)
    board[i][j] = currChar
    return op1 || op2 || op3 || op4
}
var exist = function(board, word) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] == word[0]){
                if(recur(i, j, board, board.length, board[i].length, word, 0)){
                    return true
                }
            }
        }
    }
    return false
};