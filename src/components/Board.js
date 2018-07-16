import React from 'react';
import Tile from './Tile.js';
import uuid from 'uuid'

class Board extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }
    render() {
        return (
            this.props.boardState.split('').map(eachTile => <Tile value={eachTile} key={uuid.v4()} />)
        )
    }
};

export default Board