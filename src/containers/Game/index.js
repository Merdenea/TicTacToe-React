import React from "react";
import Board from "../../components/Board";
import LeaderBoard from "../../components/LeaderBoard"

import {selectSquare, selectMove} from '../../redux/game/index';
import {connect} from 'react-redux'


/**
 * A game of tic-tac-toe.
 */
class Game extends React.Component {
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];


        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.props.jumpToMove(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (this.props.winner) {
            status = "Winner: " + this.props.winner
        } else {
            status = "Next player: " + (this.props.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winnerLine={this.props.winnerLine}
                        squares={current.squares}
                        onClick={i => this.props.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
                <div className="game-leaderboard"> 
                    <LeaderBoard
                        playerOneScore = {this.props.xWins}
                        playerTwoScore = {this.props.oWins}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        winnerLine: state.game.winnerLine,
        winner: state.game.winner,
        xIsNext: state.game.xIsNext,
        history: state.game.history,
        stepNumber: state.game.stepNumber,
        xWins: state.game.xWins,
        oWins: state.game.oWins
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: squareNumber => dispatch(selectSquare(squareNumber)),
        jumpToMove: moveNumber => dispatch(selectMove(moveNumber))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);