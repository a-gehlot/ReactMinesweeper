import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        let message = this.props.won ? "You have won!" : "You have lost"
        return (
            <section className="modal">
                <article className="modal-content">
                    <h1>{message}</h1>
                    <button onClick={this.props.restartGame}>Restart Game</button>
                </article>
                <div className="modal-screen"></div>
            </section>
        )
    }
}