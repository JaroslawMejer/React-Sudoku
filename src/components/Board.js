import React from 'react';
import Tile from './Tile.js';
import uuid from 'uuid'
import style from './Board.css';

class Board extends React.Component {
    constructor(props){
        super();
        this.state = {
            value:'',
            disabledFiltr: props.initialBoard.split('').map(i => i != '.')
        };
    }
    myCallback(dataFromTile, index){
        this.props.callbackFromGrandparent(dataFromTile, index)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            disabledFiltr: nextProps.initialBoard.split('').map(i => i != '.')
        });
    }
    render() {
        console.log(this.props.boardState.length)
        console.log(this.state.disabledFiltr)
        return (
            <div className={style.boardContainer}>
                {this.props.boardState.split('').map((eachTile, index) => <Tile callbackFromParent={this.myCallback.bind(this)} disabled={this.state.disabledFiltr[index]} value={eachTile} key={uuid.v4()} className={style.tile} id={index} />)}
            </div>
        ) 
    }
};

export default Board