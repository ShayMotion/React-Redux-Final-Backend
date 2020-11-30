import React from 'react';
import GuitarForm from './GuitarForm'
import { updateGuitar, deleteGuitar } from '../actions/myGuitars'
import { setFormDataForEdit, resetGuitarForm } from '../actions/guitarForm'
import { connect } from 'react-redux'

class EditGuitarFormWrapper extends React.Component {
    
    componentDidMount(){
        this.props.guitar && this.props.setFormDataForEdit(this.props.guitar)
    }

    componentDidUpdate(prevProps) {
        this.props.guitar && !prevProps.guitar &&
        this.props.setFormDataForEdit(this.props.guitar)
    }

    componentWillUnmount() {
    this.props.resetGuitarForm()
    }

    handleSubmit = (formData) => {
        const { updateGuitar, guitar, history } = this.props
       updateGuitar({
            ...formData,
            guitarId: guitar.id 
            }, history)
      
    }

    render() {
        const { history, deleteGuitar, guitar } = this.props
            const guitarId = guitar ? guitar.id : null
        return <>
        <GuitarForm editMode handleSubmit={this.handleSubmit} />  
        <br></br>
        <button style={{color: "red"}}
        onClick={()=>deleteGuitar(guitarId, history)}>Delete this guitar</button>
        </>
    }
};

export default connect(null, { updateGuitar, setFormDataForEdit, resetGuitarForm, deleteGuitar  })(EditGuitarFormWrapper);