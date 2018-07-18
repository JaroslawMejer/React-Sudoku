import React from 'react';
import style from './App.css';
import Board from './../components/Board'
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd'


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            initialBoard: sudoku.generate('easy'),
            board: ''
        };
        this.newGame = this.newGame.bind(this)
        this.changingBoard = this.changingBoard.bind(this)
    }
    newGame(){
        this.setState({initialBoard: sudoku.generate('easy')})
    }
    changingBoard(dataFromBoard, indexFromBoard){
        console.log('Data aquired in board: ' + dataFromBoard + 'Index aquired in board: ' + indexFromBoard)
        var newBoard = this.state.initialBoard.split('')
        console.log(newBoard)
        newBoard[indexFromBoard] = dataFromBoard
        console.log(newBoard)
        var connectedNewBoard = newBoard.join('')
        console.log(connectedNewBoard)
        this.setState({initialBoard: connectedNewBoard})  
    }
    render() {
        return (
            <div className={style.app}>
                <h1 className={style}>Sudoku</h1>
                <Board boardState={this.state.initialBoard} callbackFromGrandparent={this.changingBoard.bind(this)} />
                <div className={style.buttons}>
                    <button className={style}>Check</button>
                    <button className={style} onClick={this.newGame}>New Game</button>
                    <button className={style}>Solve</button>
                    <button className={style}>Restart</button>
                </div>
            </div>

        );
    }
};

export default hot(module)(App);