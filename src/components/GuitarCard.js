import React from 'react'
import {Link} from 'react-router-dom'

const GuitarCard = ({ guitar }) => {
    return (
        guitar ? 
        <div>
        <h3>{guitar.attributes.brand}</h3>
        <p>{guitar.attributes.model}</p>
        <p>{guitar.attributes.year}</p>
        <p>{guitar.attributes.price}</p>
        <Link to={`/l=guitars/${guitar.id}/edit`}>Edit this guitar</Link>
        </div> :
        null
    )
}

export default GuitarCard