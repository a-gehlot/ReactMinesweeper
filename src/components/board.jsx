import React from "react";
import Tile from "./tile";

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {console.log(this.props)}
                {this.props.board.grid.map((row, idx) => {
                    return (<div key={idx}>
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
                })}
            </div>
        )
    }
}

export default Board;