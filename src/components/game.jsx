import React from "react";
import * as Minesweeper from "../minesweeper"
import Board from "./board";
import Modal from "./modal";

class Game extends React.Component {
    constructor(props) {
        super(props);
        let board = new Minesweeper.Board(10, 7)
        this.state = {
            board: board,
            showModal: false
        }
    this.updateGame = this.updateGame.bind(this);
    this.checkWinStatus = this.checkWinStatus.bind(this)
    this.restartGame = this.restartGame.bind(this)
    }

    updateGame(tile, flag) {
        if (flag) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({
            board: this.state.board,
            showModal: this.checkWinStatus() ? true : false
        })
    }

    restartGame() {
        let board = new Minesweeper.Board(10, 7);
        this.setState({
            board: board,
            showModal: false
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
        this.checkWinStatus()
        return(
            <div>
                <Modal 
                show={this.state.showModal}
                restartGame={this.restartGame}
                won={this.state.board.won()}
                />
                <Board
                finished={this.state.showModal} 
                board={this.state.board}
                updateGame={this.updateGame}
                />
            </div>
        )
    }
}

export default Game