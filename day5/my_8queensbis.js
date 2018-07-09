// function to display the board
const display_board = (board) => {
    var i = 0;
    var j = 0;
    while (i < 8) {
        while (j < 8) {
            if (board[i][j] == 1) {
                process.stdout.write('Q ');
            } else {
                process.stdout.write('* ');
            }
            j++;
        }
        process.stdout.write('\n');
        i++;
        j = 0;
    }
    process.stdout.write('\n');
};
// function to check the position
const positionQueen = (board, row, col) => {
    //check the col
    var i = 0;
    while (i <= row) {
        if (board[i][col] == 1) {
            return false;
        }
        i++;
    }
    //check the diagonal on the left
    var i = row;
    var j = col;
    while (i >= 0 && j >= 0) {
        if (board[i][j] == 1) {
            return false;
        }
        i--;
        j--;
    }
    //check the diagonal on the right
    var i = row;
    var j = col;
    while (i >= 0 && j < 8) {
        if (board[i][j] == 1) {
            return false;
        }
        i--;
        j++;
    }
    return true;
};
// function to know if the 8 queens are already placed
const queensPlaced = (board) => {
    var i = 0;
    var j = 0;
    var nbrQueens = 0;
    while (i < 8) {
        while (j < 8) {
            if (board[i][j] == 1) {
                nbrQueens++;
            }
            if (nbrQueens == 8) {
                return true;
            }
            j++;
        }
        i++;
        j = 0;
    }
    return false;
};
// function recursive and backtracking
const my_8queens = (board, row) => {
    // display when there are 8 queens
    if (queensPlaced(board)) {
        display_board(board);
    }
    //if the position is ok 
    var j = 0;
    while (j < 8) {
        if (positionQueen(board, row, j)) {
            // place a queen
            board[row][j] = 1;
            //recursive
            if (my_8queens(board, row + 1)) {
                return true;
            }
            //backtracking, erase the queen
            board[row][j] = 0;
        }
        j++;
    }
    return false;
};
// main
const main = () => {
    //initialisation of the board
    var board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]
    //call the function
    my_8queens(board, 0);
};
    
//exec du main
main();