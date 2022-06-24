import React from "react";

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.checkTile = this.checkTile.bind(this);
    }

    checkTile() {
        if (this.props.tile.bombed) {
            return <div className="tile bombed">💣</div>;
        } else if (this.props.tile.explored) {
            return <div className="tile explored">{this.props.tile.adjacentBombCount()}</div>;
        } else if (this.props.tile.flagged) {
            return <div className="tile flagged">🚩</div>
        } else {
            return <div className="tile">T</div>
        }
    }

    render() {
        return(
            this.checkTile()
        )
    }
}

export default Tile;

