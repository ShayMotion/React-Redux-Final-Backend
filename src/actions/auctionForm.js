export const updateAuctionForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_AUCTION_FORM",
        formData   
    }
}

export const resetAuctionForm = () => {
    return {
        type: "RESET_NEW_AUCTION_FORM",
    }
}

export const setFormDataForEdit = auction => {
    const auctionFormData = {
        name: auction.attributes.name,
        startDate: auction.attributes.start_date,
        endDate: auction.attributes.end_date
    }
        return {
        type: "SET_FORM_DATA+FOR_EDIT",
        auctionFormData
    }
}