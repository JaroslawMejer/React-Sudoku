import React from 'react';

class Tile extends React.Component {
    constructor(props){
        super();
        this.state = {
            value:''
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.props.callbackFromParent(event.target.value, this.props.id)
        console.log('Your value: ' + event.target.value + ' Initial value: ' + this.props.value + 'Index of the element: ' + this.props.id)
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
                    className={this.props.className}
                    id={this.props.id}
                    disabled={this.props.disabled} />
        );
    }
};

export default Tile