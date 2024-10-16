import React from 'react'
import Profile from './Profile'


export default function Card({ age }) {

    return (
        <div className='card'>
            <Profile person={{ name: "Aklilu Lemma", img: "https://i.imgur.com/OKS67lh.jpg" }} cities={["Mumbai", " Pune"]} />
            <h1>{age > 18 ? "Old" : "Young"}</h1>
        </div>
    )
}
