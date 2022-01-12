import React from 'react';
import './modalButton.css'

class ModalButton extends React.Component {

    constructor(props) {
        super(props)

    }

    onButtonPressed = (event) => {
        event.preventDefault();
        this.props.setIsModalOn();
    }

    render() {
        return (
            <div className="mb">
                <button
                    type="button"
                    className="button-success"
                    onClick={this.onButtonPressed}
                >
                    Add New Schedule
                </button>
            </div>
        )
    }
}

export default ModalButton;