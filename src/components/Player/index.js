import React from "react";
import PropTypes from 'prop-types';


/** The player component */
class Player extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Player name..."/> ({this.props.type}) : {this.props.score}
                </form>   
            </div>
        )
    }
}

Player.propTypes = {
    type : PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
};

export default Player;