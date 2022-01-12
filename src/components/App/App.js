import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../../actions';
import moment from 'moment';
import '../../index.css';
import Navbar from '../Navbar/Navbar.js';
import Card from '../Card/Card.js';
import '../../custom.css';
import ModalForm from '../ModalForm/ModalForm';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        console.log('this.state.dueDate', this.state.dueDate);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}> &#x2715; </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <div className='app-left'>
                    <Navbar />
                </div>
                <div className='app-right'>
                    <div className="from-inline reminder-form">
                        <div className="from-group">
                            <input
                                className="form-control"
                                placeholder="I have to..."
                                onChange={event => this.setState({ text: event.target.value })}
                            />
                            <input
                                className="form-control"
                                type="datetime-local"
                                onChange={event => this.setState({ dueDate: event.target.value })}
                            />
                        </div>

                        <button
                            type="button"
                            className="button-success"
                            onClick={() => this.addReminder()}>
                            Add New Schedule
                        </button>
                        <button
                            type="button"
                            className="button-danger"
                            onClick={() => this.props.clearReminders()}>
                            Clear Reminders
                        </button>
                        <Card />
                    </div>
                </div>
                <ModalForm />
            </div >

        );
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }

}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);