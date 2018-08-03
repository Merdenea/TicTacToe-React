import React from "react";
import Player from "../Player"


/**A simple leaderboard component that displays the name and score for both players */
class LeaderBoard extends React.Component {
    render () {
        return (
            <div className='leaderboard'> 
                <Player
                    score = {this.props.playerOneScore}
                    type = 'X'
                />
                 <Player
                    score = {this.props.playerTwoScore}
                    type = 'O'
                />
            </div>
        );
    }
}

export default LeaderBoard;