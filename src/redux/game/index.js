/**
 *  This is the reducer for the tic-tac-toe game
 */

//## Constants
export const SELECT_SQUARE = 'SELECT_SQUARE';
export const SELECT_MOVE = 'SELECT_MOVE';

//## Actions
export const selectSquare = (squareNumber) => ({type: SELECT_SQUARE, payload: {squareNumber}});
export const selectMove = (moveNumber) => ({type: SELECT_MOVE, payload: {moveNumber}});

const initialState = {
    history: [
        {
            squares: Array(9).fill(null)
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    xWins: 0,
    oWins:0,
    winnerLine: []
};

//## Reducer
const GameReducer = (state = initialState, action) => {

    switch (action.type) {

        case SELECT_SQUARE:
            return updateSelectedSquare(state, action.payload);

        case SELECT_MOVE:
            return updateSelectedMove(state, action.payload);

        default:
            return state;
    }
};


const updateSelectedMove = (state, {moveNumber}) => {
    return Object.assign({}, state, {
        stepNumber: moveNumber,
        xIsNext: (moveNumber % 2) === 0
    })

}

const updateSelectedSquare = (state, {squareNumber}) => {

    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // if there is a winner, or the requested square already has a value then no change
    if (calculateWinner(squares) || squares[squareNumber]) {
        return state;
    }
    squares[squareNumber] = state.xIsNext ? "X" : "O";

    return {
        history: history.concat([
            {
                squares: squares
            }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(squares),
        winnerLine: calculateWinnerLine(squares),
        xWins: state.xWins + calculateWins(squares, 'X'),
        oWins: state.oWins + calculateWins(squares, 'O')
    };
}

/**
 * A game of tic-tac-toe.
 */

 /**Check to see if there is a winner */
const calculateWinner = (squares) =>{
    let winnerLine = calculateWinnerLine(squares);
    return winnerLine.length ? squares[winnerLine[0]] : null;
}


/**Find the winning line to highlight */
const calculateWinnerLine = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return [];
}

/**Check which type(X or O) is the winner */
const calculateWins = (squares, type) => {
    if (calculateWinner(squares) === type)
        return 1;
    return 0;
}


export default GameReducer;