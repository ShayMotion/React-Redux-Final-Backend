import React from 'react'
import {Link} from 'react-router-dom'

const AuctionCard = ({ auction }) => {
    return (
        auction ? 

        <div>
        <h3>auction.attributes.name</h3>
        <p>{auction.attributes.start_date}</p>
        <p>{auction.attributes.end_date}</p>
        <Link to={`/l=auctions/${auction.id}/edit`}>Edit this auction</Link>
        </div> :
        null
    )
}

export default AuctionCard