
// function to diplay the board
const display_board = (board) => {
    var x = 0;
    var y = 0;
    while (x < 8) {
        y = 0;
        while (y < 8) {
            if (board[x][y] == 1) {
                process.stdout.write('Q ');
            } else {
                process.stdout.write('* ');
            }
            y++;
        }
        process.stdout.write('\n');
        x++;
    }
    process.stdout.write('\n');
};

// function to define if the position of the queen is ok or not
const position_queen = (board, row, col) => {
    var i = 0;
    var j = 0;
    // check the column
    while (i < row) {
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

// verify if there are already 8 queens
const allQueensPlaced = (board) => {
    var i = 0;
    var j = 0;
    var nbrQueens = 0;
    while (i < 8) {
        while(j < 8) {
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

// recursive function of 8 queens and backtracking
const my_8queens = (board, row) => {
    // check if all queens are already placed
    if (allQueensPlaced(board)) {
        display_board(board);
    }
    // moves from column to column in a single row
    var j = 0;
    while (j < 8) {
        // check if the position is ok
        if (position_queen(board, row, j)) {
            // place a queen
            board[row][j] = 1;
            // recursivity
            if (my_8queens(board, row + 1)) {
                return true;
            }
            // erase the queen and backtracking
            board[row][j] = 0;
        }
        j++;
    }
   return false; 
};

// code end here
const main = () => {
    // initialisation of the board
    var board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];
    my_8queens(board, 0);
};

main();