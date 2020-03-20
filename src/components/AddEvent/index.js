import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { v4 as uuid } from 'uuid';

import './styles.css';

import * as actions from '../../actions/events';
import * as selectors from '../../reducers/index';
import events from '../../Data/events';
import { connect } from 'react-redux';

const AddEvent = ({ handleSubmit, submitting, selectedBaby, onSubmit }) => (
    <div className="eventsForm">
        <form onSubmit={handleSubmit((values) => onSubmit(values, selectedBaby))}>
            <div className="field">
            <label>Evento</label>
            <Field name="eventType" className="lastName" label="Evento" component={renderSelect}>
                <option />
                {events.map(event =>
                    <option key={event} value={event}>
                    {event}
                    </option>
                )}
            </Field>
            </div>
            <div className="field">
            <label>Notas</label>
            <Field name="notes" className="lastName" label="Apellido" component={renderInput}/>
            </div>
            <div className="createAccount">
                <button type="submit" disabled={submitting}>Agregar</button>
            </div>
        </form>
    </div>
  );

const renderSelect = ({ input, children }) => <select {...input}>{children}</select>
const renderInput = ({ input }) => <input {...input}/>

export default 
reduxForm({
    form: 'babyEventForm',
    destroyOnUnmount: false,
})(connect(
    state => ({
        selectedBaby: selectors.getSelectedBaby(state)
    }),
    dispatch => ({
        onSubmit(values, selectedBaby){
            const dateTime = require('node-datetime');
            const dt = dateTime.create()
            const format = dt.format('Y-m-d H:M:S')
            values.dateTime = format
            dispatch(actions.addEvent(uuid(), values, selectedBaby))
        },
    })
)(AddEvent))