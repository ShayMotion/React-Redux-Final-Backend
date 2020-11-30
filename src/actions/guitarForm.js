export const updateGuitarForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_GUITAR_FORM",
        formData   
    }
}

export const resetGuitarForm = () => {
    return {
        type: "RESET_NEW_GUITAR_FORM",
    }
}

export const setFormDataForEdit = guitar => {
    const guitarFormData = {
        brand: guitar.attributes.brand,
        model: guitar.attributes.model,
        year: guitar.attributes.year,
        price: guitar.attributes.price
    }
        return {
        type: "SET_FORM_DATA+FOR_EDIT",
        guitarFormData
    }
}