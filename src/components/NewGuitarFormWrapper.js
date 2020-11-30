import React from 'react';
import GuitarForm from './GuitarForm'
import { createGuitar } from '../actions/myGuitars'
import { connect } from 'react-redux'

const NewGuitarFormWrapper = ({ history, createGuitar }) => {

    const handleSubmit = (formData, userId) => {
        createGuitar({
            ...formData,
            userId 
            }, history)
      
    }
return <GuitarForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createGuitar })(NewGuitarFormWrapper);