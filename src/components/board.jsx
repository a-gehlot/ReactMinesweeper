import React from "react";
import Tile from "./tile";

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            this.props.board.grid.map((row, idx) => {
                return (<div className="row" key={idx}>
                    {row.map((tile, idx) => {
                    return (
                        <div key={idx}>
                            <Tile
                            tile={tile}
                            updateGame={this.props.updateGame}/>
                        </div>
                    )
                    })} 
                </div>)
            })
        )
    }
}

export default Board;