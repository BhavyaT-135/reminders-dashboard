import React, { useState } from 'react';
import Modal from 'react-modal';
import './modalForm.css'

Modal.setAppElement('#modal')
class ModalForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Desc: '',
            S_Date: '',
            E_Date: '',
            Weeks: '',
            id: 0,
        }
    }


    closeButton = (event) => {
        event.preventDefault();
        this.props.setIsModalOff();
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.setState({ id: Math.random() })
        this.props.addTodos(this.state);
        this.setState({});
    }

    render() {
        return (
            <div className="mf">
                <Modal isOpen={this.props.isModalOn} onRequestClose={() => this.props.setIsModalOff()}
                    style={
                        {
                            content: {
                                padding: 'none',
                                borderRadius: '15px',
                                width: '70%',
                                height: 'fit-content',
                                marginLeft: '180px',
                                marginTop: '50px'
                            }
                        }
                    }
                >
                    <div className='mf-title'>
                        Create New Schedule
                    </div>
                    <div className='divider'></div>
                    <form onSubmit={this.formSubmit}>
                        <div className='mf-name'>Schedule Name</div>
                        <div className="ui input">
                            <input type="text" value={this.state.Desc} placeholder="Enter name" style={{ userSelect: 'auto' }}
                                onChange={(event) => this.setState({ Desc: event.target.value })} />
                        </div>
                        <div className='three-dates'>
                            <div className='name-form'>
                                <div className='mf-name'>Start Date</div>
                                <div className="ui input start-date">
                                    <input type="date" value={this.state.S_Date} placeholder="Enter Start Date" style={{ userSelect: 'auto' }}
                                        onChange={(event) => this.setState({ S_Date: event.target.value })} />
                                </div>
                            </div>
                            <div className='name-form'>
                                <div className='mf-name'>End Date</div>
                                <div className="ui input end-date">
                                    <input type="date" value={this.state.E_Date} placeholder="Enter End Date" style={{ userSelect: 'auto' }}
                                        onChange={(event) => this.setState({ E_Date: event.target.value })} />
                                </div>
                            </div>
                            <div className='name-form'>
                                <div className='mf-name'>Enter No. of Weeks</div>
                                <div className="ui input weeks">
                                    <input type="text" value={this.state.Weeks} placeholder="Enter No. of Weeks" style={{ userSelect: 'auto' }}
                                        onChange={(event) => this.setState({ Weeks: event.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className='mf-buttons'>
                            <button
                                type="button"
                                className="button-success close"
                                onClick={this.closeButton}>
                                Close
                            </button>
                            <button
                                type="submit"
                                className="button-success create">
                                Create
                            </button>
                        </div>
                    </form>
                </Modal >
            </div >
        )
    }
}

export default ModalForm;