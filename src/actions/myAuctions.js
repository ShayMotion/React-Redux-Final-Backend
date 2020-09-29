import { resetAuctionForm } from './auctionForm'

export const setMyAuctions = auctions => {
    return {
        type: "SET_MY_AUCTIONS",
        auctions
    }
}

export const clearAuctions = () => {
    return {
        type: "CLEAR_TRIPS"
    }
}

export const addAuction = auction => {
    return {
        type: "ADD_AUCTION",
        auction
    }
}

export const deleteAuctionSuccess = auctionId => {
    return {
        type: "DELETE_AUCTION",
        auctionId
    }
}

export const updateAuctionSuccess = auction => {
    return {
        type: "UPDATE_AUCTION",
        auction
    }
}

export const getMyAuctions = () => {
   return dispatch => {
return fetch("http://localhost:3001/api/v1/auctions", {
    credentials: "include",
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
.then(r => r.json())
.then(response => {
    if (response.error) {
        alert(response.error)
    } else {
        dispatch(setMyAuctions(response.data))
    }
})
.catch(console.log)
    }
}

export const createAuction = (auctionData, history) => {
    return dispatch => {
        const sendableAuctionData = {
            auction: {
                start_date: auctionData.startDate,
                end_date: auctionData.endDate,
                name: auctionData.name,
                user_id: auctionData.userId
            }
        }
        return fetch("http://localhost:3001/api/v1/auctions", {
         credentials: "include",   
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableAuctionData)
        })
        .then(r => r.json())
        .then(resp => {
         if (resp.error) {
             alert(resp.error)
         } else {
             dispatch(addAuction(resp.data))
             dispatch(resetAuctionForm())
             history.push(`/trips/#{resp.data.id}`)
         }   
        })  
            .catch(console.log)
    }
}

export const updateAuction = (auctionData, history) => {
    return dispatch => {
        const sendableAuctionData = {
            auction: {
                start_date: auctionData.startDate,
                end_date: auctionData.endDate,
                name: auctionData.name,
            }
        }
        return fetch(`http://localhost:3001/api/v1/auctions/${auctionData.AuctionId}`, {
         credentials: "include",   
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableAuctionData)
        })
        .then(r => r.json())
        .then(resp => {
         if (resp.error) {
             alert(resp.error)
         } else {
             dispatch(updateAuctionSuccess(resp.data))
             history.push(`/auctions/${resp.data.id}`)
         }   
        })  
            .catch(console.log)
    }
}

export const deleteAuction = (auctionId, history) => {
return dispatch => {
    return fetch(`http://localhost:3001/api/v1/auctions/${auctionId}`, {
     credentials: "include",   
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then(r => r.json())
    .then(resp => {
     if (resp.error) {
         alert(resp.error)
     } else {
         dispatch(deleteAuctionSuccess(auctionId))
         history.push(`/auctions`)
     }   
    })  
        .catch(console.log)
}
}