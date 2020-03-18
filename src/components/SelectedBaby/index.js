import React from 'react';
import { reduxForm, Field } from 'redux-form';

import './styles.css';

import * as actions from '../../actions/selectedBaby';
import * as selectors from '../../reducers/index'
import { connect } from 'react-redux';

const SelectBabyForm = ({handleSubmit, submitting, onChange, number}) => (
    <div className="selectBaby">
      {
        number === 0 ? (
            <h1>
                {'No hay bebés:('}
            </h1>
        ) : (
            <div>
                <h3>Selecciona un Bebé</h3>
                <form onSubmit={handleSubmit}>
                    <Field name="baby" onChange={onChange} component={renderForm}/>
                </form>
            </div>
        )
      }
    </div>
  );

const renderForm = ({ input }) => <select {...input}/>

export default reduxForm({
    form: 'selectBabyForm',
    destroyOnUnmount: false,
    onChange(values, dispatch){
        console.log(values)
        dispatch(actions.selectBaby(values))
    }
})(connect(
    state => ({
        number: selectors.getBabies(state).length
    }),
)(SelectBabyForm))