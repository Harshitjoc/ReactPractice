import React from 'react'

function Profile(prop) {
    /* we can pass any thing in parameter instead of prop
    and use same parameter below instead of prop.text*/

    const red = () => {
        alert("red function clled")
    }

    return <div>
        <h1 onClick={red}>{prop.text}</h1>
        <h1 onClick={red}>
            {prop.data.firstname}
            {prop.data.lastname}
        </h1>
    </div>
}

export default Profile