import React from 'react'

function Badges({ color }) {
    return (
        <div>
            <div className='container'>
                <div className={`${color}-Square`}>Badge</div>
                <div className={`${color}-Pill`}>Badge</div>
            </div>
        </div>

    )
}

export default Badges