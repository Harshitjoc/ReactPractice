import React from 'react'

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Chandu',
            email: 'chandu@xyz.com',
            count: 0
        }
    }

    updateState() {
        this.setState({
            name: 'Bruce',
            count: this.state.count + 1
        })
    }

    render() {
        console.warn("render")
        return (
            <div>
                <h1>Hello {this.state.count}</h1>
                <h1>Email:{this.state.email}</h1>
                <button onClick={() => { this.updateState() }}>Update State</button>
            </div>
        )
    }
}

export default State