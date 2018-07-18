import React from 'react';
import Tile from './Tile.js';
import uuid from 'uuid'
import style from './Board.css';

class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            value:''
        };
    }
    myCallback(dataFromTile, index){
        console.log('Passed value: ' + dataFromTile + ' Passed index: ' + index)
        this.props.boardState.split('')[index] = dataFromTile
    }
    render() {
        return (
            <div className={style.boardContainer}>
                {this.props.boardState.split('').map((eachTile, index) => <Tile callbackFromParent={this.myCallback.bind(this)} value={eachTile} key={uuid.v4()} className={style.tile} id={index} />)}
            </div>
        )
    }
};

export default Board