import React from 'react';
import { v4 as uuid } from 'uuid';
import { reduxForm, Field } from 'redux-form';
import './styles.css';

import * as actions from '../../actions/babies'
import SelectedBabyForm from '../SelectedBaby/index';
import AddEvent from '../AddEvent/index';

const Menu = ({ handleSubmit, submitting }) => {
    return (
        <div className = "wrapper">
            <div className = "form-wrapper">
                <h1>Bebes</h1>
                <SelectedBabyForm/>
            </div>
            <div className = "form-wrapper">
                <h1>Eventos</h1>
                <AddEvent/>
            </div>
        </div>
    )
};

const validate = values => {//Validacion del Register Form

    const error = {}

    if(!values.firstName){
        error.firstName = 'Campo requerido'
    }
    if(!values.lastName){
        error.lastName = 'Campo requerido'
    }

    return error
}

const renderInput = ({ input, meta, label }) =>
    <div className="field" >
        <label>{label}</label>
        <input {...input} className={[meta.active ? 'active' : '', meta.error && meta.touched ? 'error' : ''].join('')} placeholder={label}/>
        {meta.error && meta.touched && <span className="errorMessage">{meta.error}</span>}
    </div>

export default reduxForm({
    form: 'babyEventsForm',
    destroyOnUnmount: false,
    onSubmit(values, dispatch){
        
    },
    validate
})(Menu)
