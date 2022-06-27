import React from "react";

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.checkTile = this.checkTile.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    checkTile() {
        let className = "tile";
        let content;
        if (this.props.tile.explored) {
            className += " explored"
            content = this.props.tile.adjacentBombCount()
        }
        if (this.props.tile.flagged) {
            className += " flagged"
            content = "🚩"
        }
        else if (this.props.tile.bombed) {
            className += " bombed"
            content = "💣"
        }
        if (!this.props.finished) {
            return <div onClick={this.handleClick} className={className}>{content}</div>
        } else {
            return <div className={className}>{content}</div>

        }
        
    }

    handleClick(e) {
            this.props.updateGame(this.props.tile, e.altKey);
    }

    render() {
        return(
            this.checkTile()
        )
    }
}

export default Tile;

