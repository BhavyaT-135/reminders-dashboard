import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../../index.css';
import Navbar from '../Navbar/Navbar.js';
import Card from '../Card/Card.js';
import '../../custom.css';
import ModalForm from '../ModalForm/ModalForm';
import Header from '../Header/Header.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <div className='app-left'>
                    <Navbar />
                </div>
                <div className='app-right'>
                    <Header />
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
                            className="button-success">
                            Add New Schedule
                        </button>
                        <button
                            type="button"
                            className="button-danger"
                        >
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

export default App;