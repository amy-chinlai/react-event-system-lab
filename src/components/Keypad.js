// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    keyUp = (event) => {
        console.log("Entering password...")
    } 
    render() {
        return (
            <input type="password" onKeyUp={this.keyUp}            />
        )
    }
}

export default Keypad