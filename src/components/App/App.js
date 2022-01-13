import React, { Component } from 'react';
import '../../index.css';
import Navbar from '../Navbar/Navbar.js';
import UserCard from '../Card/UserCard.js';
import '../../custom.css';
import ModalForm from '../ModalForm/ModalForm';
import Header from '../Header/Header.js';
import ModalButton from '../ModalButton/ModalButton.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOn: false,
            todos: [{
                Desc: 'Winter Training Schedule',
                S_Date: '25-01-2020',
                E_Date: '19-02-2020',
                Weeks: '4',
                id: 1
            },
            ]
        }
    }

    addTodos = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                todo
            ]
        });
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
                <ModalForm isModalOn={this.state.isModalOn} todos={this.state.todos} setIsModalOff={this.setIsModalOff} addTodos={this.addTodos} />
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
                        <UserCard todos={this.state.todos} />
                    </div>
                </div>
            </div >

        );
    }
}

export default App;