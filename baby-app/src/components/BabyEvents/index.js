import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/events';
import * as selectors from '../../reducers/index';


const BabyEvent = ({ babyEvents, events, onClick }) => (
    <div className="event-card-wrapper">
        {
            babyEvents === undefined ? (
                <h1>
                    {'No hay eventos de este bebé:('}
                </h1>
            ) : (
                <div>
                    {
                        babyEvents.map(babyEvent => {
                            return events.map(event => {
                                if (event[babyEvent] != undefined){
                                    console.log('Llega if', event[babyEvent])
                                    return (
                                        <div className="card-wrapper" onClick={onClick(babyEvent)}>
                                            <div>{`Event type: ${event[babyEvent].eventType}`}</div>
                                            <div>{`Notes: ${event[babyEvent].notes}`}</div>
                                            <div>{`Date and Time: ${event[babyEvent].dateTime}`}</div>
                                        </div>)
                                }
                            }).filter(event => event != undefined);
                            // return <div>HOLAAAAAA</div>
                        }).filter(babyEvent => babyEvent != undefined)
                    }
                </div>
            )
        }
    
    </div>
)

export default connect(
    state => ({
        babyEvents: selectors.getBabyEvents(state, selectors.getSelectedBaby(state)),
        events: selectors.getEvents(state)
    }),
    dispatch => ({
        onClick(eventId){
            // dispatch(actions.removeEvent(eventId))
        }
    })
)(BabyEvent)