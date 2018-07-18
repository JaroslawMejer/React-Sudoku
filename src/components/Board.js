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
        this.props.callbackFromGrandparent(dataFromTile, index)
    }
    render() {
        console.log(this.props.boardState.length)
        if (this.props.boardState.length < 5) {
            return (
                <div className={style.boardContainer}>
                    {this.props.initialBoardState.split('').map((eachTile, index) => <Tile callbackFromParent={this.myCallback.bind(this)} value={eachTile} key={uuid.v4()} className={style.tile} id={index} />)}
                </div>
            )
        } else {
           return (
                <div className={style.boardContainer}>
                    {this.props.boardState.split('').map((eachTile, index) => <Tile callbackFromParent={this.myCallback.bind(this)} value={eachTile} key={uuid.v4()} className={style.tile} id={index} />)}
                </div>
            ) 
        }
    }
};

export default Board