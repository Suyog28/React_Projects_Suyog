import React from 'react'

export default function Profile({ person, age, cities }) {

    return (
        <div>
            <h1>{person.name}</h1>
            <img src={person.img} />
            <h2>{age}</h2>
            <h3>{cities}</h3>
        </div>
    )
}
