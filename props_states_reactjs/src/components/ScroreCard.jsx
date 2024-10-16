import React, { useState } from 'react'

export default function ScroreCard() {

    const [score, setScore] = useState(0)

    function handleSubtract() {
        if (score <= 0) {
            setScore(0)
        } else {
            setScore(prevData => prevData - 1)
        }
    }

    function handleAdditon() {
        setScore(prevData => prevData + 1)
    }

    return (
        <div className='card'>
            <h1>{score}</h1>
            <button className='subtract' onClick={handleSubtract}>-</button>
            <button className='addition' onClick={handleAdditon}>+</button>
        </div>
    )
}
