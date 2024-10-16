import React from 'react'

function Die(props) {
    return (
        <div className='dies-container'>
            <h1>{props.value}</h1>
        </div>
    )
}

export default Die