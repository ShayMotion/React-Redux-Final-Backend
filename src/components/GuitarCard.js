import React from 'react'

const GuitarCard = ({ guitar }) => {
    return (
        guitar ? 
        <div>
        <h3>Brand: {guitar.attributes.brand}</h3>
        <p>Model: {guitar.attributes.model}</p>
        <p>Year: {guitar.attributes.year}</p>
        <p>Price: ${guitar.attributes.price}</p>
        </div> :
        null
    )
}

export default GuitarCard