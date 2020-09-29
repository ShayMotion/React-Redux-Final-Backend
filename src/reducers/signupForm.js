const initialState = {
    name: "",
    username: "",
    password: "",
    hometown: {
        city: "",
        state: "",
        country: "",
    }
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return {

            }
        case "RESET_SIGNUP_FORM":
            return initialState
        default:
            return state
    }
}
