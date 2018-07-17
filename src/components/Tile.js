import React from 'react';

class Tile extends React.Component {
    constructor(){
        super();
        this.state = {
            value:''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({value: event.target.value})
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
                    value={this.props.value} />
        );
    }
};

export default Tile