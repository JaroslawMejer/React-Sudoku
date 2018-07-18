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
        this.restart = this.restart.bind(this)
        this.solve = this.solve.bind(this)
        this.check = this.check.bind(this)
    }
    newGame(){
        this.setState({initialBoard: sudoku.generate('easy'), board: ''})
    }
    solve(){
        if (this.state.board.length < 2) {
            this.setState({initialBoard: sudoku.solve(this.state.initialBoard), board: ''})
        } else{
            this.setState({initialBoard: sudoku.solve(this.state.board), board: ''})
        }
    }
    check(){
        if (this.state.board.length < 2 && sudoku.solve(this.state.initialBoard) == true) {
            console.log('Rozwiązanie jest wciąż możliwe!')
        } else if (this.state.board.length > 2 && sudoku.solve(this.state.board) == true){
            console.log('Rozwiązanie jest wciąż możliwe!')} else{
            console.log('Coś poszło nie tak')
            }
    }
    changingBoard(dataFromBoard, indexFromBoard){
        console.log('Data aquired in board: ' + dataFromBoard + 'Index aquired in board: ' + indexFromBoard)
        if (this.state.board.length < 2) {
            var newBoard = this.state.initialBoard.split('')
            newBoard[indexFromBoard] = dataFromBoard
            var connectedNewBoard = newBoard.join('')
            this.setState({board: connectedNewBoard}) 
        } else{
            var newBoard = this.state.board.split('')
            newBoard[indexFromBoard] = dataFromBoard
            var connectedNewBoard = newBoard.join('')
            this.setState({board: connectedNewBoard})  
        }
    }
    restart(){
        this.setState({board:this.state.initialBoard})
    }
    render() {
        console.log('initialBoard ' + this.state.initialBoard)
        console.log('Board ' + this.state.board)
        return (
            <div className={style.app}>
                <h1 className={style}>Sudoku</h1>
                <Board boardState={this.state.board} initialBoardState={this.state.initialBoard} callbackFromGrandparent={this.changingBoard.bind(this)} />
                <div className={style.buttons}>
                    <button className={style} onClick={this.check}>Check</button>
                    <button className={style} onClick={this.newGame}>New Game</button>
                    <button className={style} onClick={this.solve}>Solve</button>
                    <button className={style} onClick={this.restart}>Restart</button>
                </div>
            </div>

        );
    }
};

export default hot(module)(App);