import React from 'react'

// class Event extends React.Component {

//     testfun() {
//         alert("testFun")
//     }

//     render() {

//         return (
//             <div>
//                 <h1>Profile</h1>
//                 {/* <button onClick={this.testfun.bind()}>Click Me</button> */}
//                 {/* <button onClick={() => this.testfun()}>Click Me</button> */}
//                 <button onClick={this.testfun}>Click Me</button>
//             </div>
//         )
//     }
// }

function Event() {
    function testFun() { alert('testfun') }
    // const testFun = () => { alert('testFun') }
    return (
        <div>
            <h1>Profile 1</h1>
            <button onClick={testFun}>Click me</button>
        </div>
    )
}

export default Event;