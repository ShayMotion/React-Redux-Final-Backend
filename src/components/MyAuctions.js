import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyAuctions = props => {
    const auctionCards = props.auctions.length > 0 ? 
    props.auctions.map(a => (<p key={a.id}><Link to={`/auctions/${a.id}`}>{a.attributes.name}</Link></p>)) : null
    
    return auctionCards
}

const mapStateToProps = state => {
    return {
        auctions: state.myAuctions
    }
}
export default connect(mapStateToProps)(MyAuctions)