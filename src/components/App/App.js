import React, { Component } from 'react';
import '../../index.css';
import Navbar from '../Navbar/Navbar.js';
import Card from '../Card/Card.js';
import '../../custom.css';
import ModalForm from '../ModalForm/ModalForm';
import Header from '../Header/Header.js';
import ModalButton from '../ModalButton/ModalButton.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOn: false,
        }
    }

    setIsModalOn = () => {
        this.setState({ isModalOn: true })
    }

    setIsModalOff = () => {
        this.setState({ isModalOn: false })
    }

    render() {
        //console.log('State', this.state);
        return (
            <div className="App">
                <ModalForm isModalOn={this.state.isModalOn} setIsModalOff={this.setIsModalOff} />
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

                        <ModalButton setIsModalOn={this.setIsModalOn} />
                        <button
                            type="button"
                            className="button-danger"
                        >
                            Clear Reminders
                        </button>
                        <Card />
                        <Card />
                    </div>
                </div>
            </div >

        );
    }
}

export default App;