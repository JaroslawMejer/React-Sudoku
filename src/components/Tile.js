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
        this.props.callbackFromParent(event.target.value, this.props.id)
    }
    handleSubmit(event) {
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
                    id={this.props.id} />
        );
    }
};

export default Tile