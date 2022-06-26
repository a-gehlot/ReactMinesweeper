import React from "react";
import * as Minesweeper from "../minesweeper"
import Board from "./board";

class Game extends React.Component {
    constructor(props) {
        super(props);
        let board = new Minesweeper.Board(10, 8)
        this.state = {
            board: board,
            finished: false
        }
    this.updateGame = this.updateGame.bind(this);
    this.checkWinStatus = this.checkWinStatus.bind(this)
    }

    updateGame(tile, flag) {
        if (flag) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({
            board: this.state.board,
            finished: this.checkWinStatus() ? true : false
        })
    }

    checkWinStatus() {
        if (this.state.board.won()) {
            return "You have won!"
        } else if (this.state.board.lost()) {
            return "You have lost!"
        } else {
            return null;
        }
    }

    render() {
        let winOrLose = this.checkWinStatus()
        return(
            <div>
                <h1 className="endText">{winOrLose}</h1>
                <Board
                finished={this.state.finished} 
                board={this.state.board}
                updateGame={this.updateGame}
                />
            </div>
        )
    }
}

export default Game