import React from 'react'

const AuctionCard = ({ auction }) => {
    return (
        auction ? 

        <div>
        <h3>Auction Title: <br></br>{auction.attributes.title}</h3>
        <p>Start Date: <br></br>{auction.attributes.start_date}</p>
        <p>End Date: <br></br>{auction.attributes.end_date}</p>
        </div> :
        null
    )
}

export default AuctionCard