import React from 'react'

// eslint-disable-next-line react/prop-types
function Cards({ iconCard, cardTitle, cardText }) {
    return (
        <div className='card-container'>

            <div className='card'>
                <div className="cardIcon">
                    {iconCard}
                </div>
                <div className='content'>
                    <p className='cardTitle'>{cardTitle}</p>
                    <p className='cardText'>{cardText}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards