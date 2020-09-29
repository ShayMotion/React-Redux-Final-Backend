import React from 'react';
import AuctionForm from './AuctionForm'
import { updateAuction, deleteAuction } from '../actions/myAuctions'
import { setFormDataForEdit, resetAuctionForm } from '../actions/auctionForm'
import { connect } from 'react-redux'

class EditAuctionFormWrapper extends React.Component {
    
    componentDidMount(){
        this.props.auction && this.props.setFormDataForEdit(this.props.auction)
    }

    componentDidUpdate(prevProps) {
        this.props.auction && !prevProps.auction &&
        this.props.setFormDataForEdit(this.props.auction)
    }

    componentWillUnmount() {
    this.props.resetAuctionForm()
    }

    handleSubmit = (formData) => {
        const { updateAuction, auction, history } = this.props
       updateAuction({
            ...formData,
            auctionId: auction.id 
            }, history)
      
    }

    render() {
        const { history, deleteAuction, auction } = this.props
            const auctionId = auction ? auction.id : null
        return <>
        <AuctionForm editMode handleSubmit={this.handleSubmit} />  
        <br></br>
        <button style={{color: "red"}}
        onClick={()=>deleteAuction(auctionId, history)}>Delete this auction</button>
        </>
    }
};

export default connect(null, { updateAuction, setFormDataForEdit, resetAuctionForm, deleteAuction  })(EditAuctionFormWrapper);