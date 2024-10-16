import React from 'react'

export default function GetImageUrl(person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    )
}
