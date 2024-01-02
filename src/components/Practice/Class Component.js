import React from 'react'

class Profile extends React.Component {
    // constructor() {
    //     super()
    // }
    componentDidMount() {
        console.warn("called lifecycle")
    }

    render() {

        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default Profile;