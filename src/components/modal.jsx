import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <article>Modal
                <button onClick={this.props.restartGame}>Restart Game</button>
            </article>
        )
    }
}