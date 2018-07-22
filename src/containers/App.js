import React from 'react';
import style from './App.css';
import Board from './../components/Board'
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd'


class App extends React.Component {
    constructor(){
        super();
        const newSudoku = sudoku.generate('easy')
        this.state = {
            initialBoard: newSudoku,
            board: newSudoku, 
            condition: false,
            protip: false
        }
        this.easyGame = this.easyGame.bind(this)
        this.mediumGame = this.mediumGame.bind(this)
        this.hardGame = this.hardGame.bind(this)
        this.changingBoard = this.changingBoard.bind(this)
        this.restart = this.restart.bind(this)
        this.solve = this.solve.bind(this)
        this.check = this.check.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleProtip = this.handleProtip.bind(this)
    }
    easyGame(){
        const newSudoku = sudoku.generate('easy')
        this.setState({initialBoard: newSudoku, board: newSudoku})
    }
    mediumGame(){
        const newSudoku = sudoku.generate('medium')
        this.setState({initialBoard: newSudoku, board: newSudoku})
    }
    hardGame(){
        const newSudoku = sudoku.generate('hard')
        this.setState({initialBoard: newSudoku, board: newSudoku})
    }
    solve(){
        this.setState({board: sudoku.solve(this.state.board)})
    }
    handleClick(){
        this.setState({
            condition: !this.state.condition
        })
        console.log('Condition ' + this.state.condition)
    }
    handleProtip(){
        this.setState({
            protip: !this.state.protip
        })
    }
    check(){
        console.log('Wynik checka: ' + sudoku.solve(this.state.board))
        if (sudoku.solve(this.state.board) == false){
            return <p>Something went wrong</p>} else{
            return <p>Solution is still possible, go for it!</p>
        }
    }
    changingBoard(dataFromBoard, indexFromBoard){
        console.log('Data aquired in board: ' + dataFromBoard + 'Index aquired in board: ' + indexFromBoard)
        var newBoard = this.state.board.split('')
        newBoard[indexFromBoard] = dataFromBoard
        var connectedNewBoard = newBoard.join('')
        this.setState({board: connectedNewBoard})
        console.log('Value of newBoard: ' + connectedNewBoard)
        if(connectedNewBoard.match(/^[0-9]+$/) != null && sudoku.solve(this.state.board) !== false){
            alert('Congrats, you won!')
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
                <Board boardState={this.state.board} initialBoard={this.state.initialBoard} callbackFromGrandparent={this.changingBoard.bind(this)} />
                <div className={this.state.protip ? style.protip : style.toggled}>
                    <h2>Protip:</h2>
                    {this.check()}
                </div>
                <div className={style.buttons}>
                    <button className={style} onClick={this.handleProtip}>Check</button>
                    <button className={style} onClick={this.handleClick}>New Game</button>
                    <button className={style} onClick={this.solve}>Solve</button>
                    <button className={style} onClick={this.restart}>Restart</button>
                </div>
                <DifficultyButtons
                    className={this.state.condition ? style.difficulty : style.toggled}
                    easy={this.easyGame}
                    medium={this.mediumGame}
                    hard={this.hardGame} />
            </div>

        );
    }
};

class DifficultyButtons extends React.Component{
    render(){
        return(
            <div
                className={this.props.className}
                onClick={this.props.toggleClassName}>
                <button className={style.easy} onClick={this.props.easy}>Easy</button>
                <button className={style.medium} onClick={this.props.medium}>Medium</button>
                <button className={style.hard} onClick={this.props.hard}>Hard</button>
            </div>
        )
    }
}

export default hot(module)(App);