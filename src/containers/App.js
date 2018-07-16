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
    }
    render() {
        return (
            <div className={style.app}>
                <h1>Sudoku</h1>
                <Board boardState={this.state.initialBoard} />
                <div className={style.buttons}>
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button>Restart</button>
                </div>
            </div>

        );
    }
};

export default hot(module)(App);