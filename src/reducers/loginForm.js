const initialState = {
    username: "",
    password: ""
}

export default (state = null, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData 
            case "RESET_LOGIN_FORM":
                return initialState
            default:
                return state
    }
}