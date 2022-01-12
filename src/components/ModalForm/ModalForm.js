import React, { useState } from 'react';
import Modal from 'react-modal';
import './modalForm.css'

Modal.setAppElement('#modal')
class ModalForm extends React.Component {
    constructor(props) {
        super(props)

    }

    closeButton = (event) => {
        event.preventDefault();
        this.props.setIsModalOff();
    }

    render() {
        return (
            <div className="mf">
                <Modal isOpen={this.props.isModalOn}
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
                    <div className='mf-name'>Schedule Name</div>
                    <div className="ui input">
                        <input type="text" placeholder="Enter name" style={{ userSelect: 'auto' }} />
                    </div>
                    <div className='three-dates'>
                        <div className='name-form'>
                            <div className='mf-name'>Start Date</div>
                            <div className="ui input start-date">
                                <input type="date" placeholder="Enter Start Date" style={{ userSelect: 'auto' }} />
                            </div>
                        </div>
                        <div className='name-form'>
                            <div className='mf-name'>End Date</div>
                            <div className="ui input end-date">
                                <input type="date" placeholder="Enter End Date" style={{ userSelect: 'auto' }} />
                            </div>
                        </div>
                        <div className='name-form'>
                            <div className='mf-name'>Enter No. of Weeks</div>
                            <div className="ui input weeks">
                                <input type="text" placeholder="Enter No. of Weeks" style={{ userSelect: 'auto' }} />
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
                            type="button"
                            className="button-success create">
                            Create
                        </button>
                    </div>
                </Modal >
            </div >
        )
    }
}

export default ModalForm;