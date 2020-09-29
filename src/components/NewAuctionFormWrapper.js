import React from 'react';
import AuctionForm from './AuctionForm'
import { createAuction } from '../actions/myAuctions'
import { connect } from 'react-redux'

const NewAuctionFormWrapper = ({ history, createAuction }) => {

    const handleSubmit = (formData, userId) => {
        createAuction({
            ...formData,
            userId 
            }, history)
      
    }
return <AuctionForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createAuction })(NewAuctionFormWrapper);