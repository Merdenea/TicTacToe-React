import React from "react";
import PropTypes from 'prop-types';

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */
class Square extends React.Component {
    render() {        
        return (
            <button className={this.props.className} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}
Square.propTypes = {
    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func
};

export default Square;