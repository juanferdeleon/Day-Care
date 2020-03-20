import React from 'react';
import { reduxForm, Field } from 'redux-form';

import './styles.css';

import * as actions from '../../actions/selectedBaby';
import * as selectors from '../../reducers/index'
import { connect } from 'react-redux';

const SelectBabyForm = ({handleSubmit, onSubmit, number, babies, selectedBaby}) => (
    <div className="selectBaby">
      {
        number === 0 ? (
            <h1>
                {'No hay bebés:('}
            </h1>
        ) : (
            <div className='selectBaby'>
                <h3>Selecciona un Bebé</h3>
                <form onSubmit={handleSubmit(value => onSubmit(value))}>
                    <Field name="selectedBaby" component={renderForm}>
                    <option />
                        {babies.map(baby =>{
                            const [ bb ] = Object.entries(baby)
                            return (
                            <option key={bb[0]} value={bb[0]}>
                                {bb[1].firstName}
                            </option>)}
                        )}
                    </Field>
                    {
                        selectedBaby === null ? (
                            <h4>
                                {'No has seleccionado un bebe'}            
                            </h4>
                        ) : (
                            <h4>
                                {
                                    babies.map(baby => {
                                        const [ bb ] = Object.entries(baby)
                                        if (bb[0] == selectedBaby){
                                            return `El bebe seleccionado es ${bb[1].firstName}`
                                        }
                                    })
                                }            
                            </h4>
                        )
                    }
                    <div className="createAccount">
                        <button type="submit">Seleccionar</button>
                    </div>
                </form>
            </div>
        )
      }
    </div>
  );

    const renderForm = ({ input, children }) => <select {...input}>{children}</select>

export default reduxForm({
    form: 'selectBabyForm',
    destroyOnUnmount: false,
})(connect(
    state => ({
        number: selectors.getBabies(state).length,
        babies: selectors.getBabies(state),
        selectedBaby: selectors.getSelectedBaby(state)
    }),
    dispatch => ({
        onSubmit(value){
            dispatch(actions.selectBaby(value.selectedBaby))
        }
    })
)(SelectBabyForm))