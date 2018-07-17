import React from 'react';

class Tile extends React.Component {
    constructor(){
        super();
        this.state = {
            value:''
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.props.callbackFromParent(event.target.value)
        console.log(event.target.value + '' + this.props.value)
    }
    handleSubmit(event) {
        console.log('Number ' + this.state.value + ' was submitted')
        event.preventDefault();
    }
    render() {
        return (
                <input
                    type='number'
                    min='1'
                    max='9'
                    onChange={this.handleChange}
                    value={this.props.value}
                    className={this.props.className} />
        );
    }
};

export default Tile