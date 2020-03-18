import React from 'react';
import { v4 as uuid } from 'uuid';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import './styles.css';

import * as actions from '../../actions/babies'

const RegisterBaby = ({ handleSubmit, submitting }) => {
    return (
    <div className = "wrapper">
        <div className = "form-wrapper">
            <h1>Ingresa un nuevo bebé</h1>
            <form onSubmit={handleSubmit}>
                <Field name="firstName" className="firstName" label="Nombre" component={renderInput}/>
                <Field name="lastName" className="lastName" label="Apellido" component={renderInput}/>
                <div className="createAccount">
                    <Link to='/menu'>
                        <button type="submit" disabled={submitting}>Agregar</button>
                    </Link>
                </div>
            </form>
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
    form: 'registerBabyForm',
    destroyOnUnmount: false,
    onSubmit(values, dispatch){
        console.log(values)
        dispatch(actions.addBaby(uuid(), values));
    },
    validate
})(RegisterBaby)
