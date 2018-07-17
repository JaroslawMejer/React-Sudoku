import React from 'react';
import Tile from './Tile.js';
import uuid from 'uuid'
import style from './Board.css';

class Board extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div className={style.boardContainer}>
                {this.props.boardState.split('').map(eachTile => <Tile value={eachTile} key={uuid.v4()} className={style.tile} />)}
            </div>
        )
    }
};

export default Board