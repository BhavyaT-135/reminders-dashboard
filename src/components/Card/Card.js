import React, { useState } from 'react';
import './card.css';
import { MdDelete } from "react-icons/md";
import { MdMode } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";

const Card = (todo) => {
    const [show, setShow] = useState(false);
    const [deleteCard, setDeleteCard] = useState(true);

    const openDropdown = (event) => {
        event.preventDefault();
        setShow(!show);
    }

    const delCard = (event) => {
        event.preventDefault();
        setDeleteCard(!deleteCard);
    }

    return (
        <div>
            {deleteCard && (
                <div className='ui card'>
                    <div className='content'>
                        <div className='left-card'>
                            <div className='header'>{todo.todo.Desc}</div>
                            <div className='description' style={{ color: 'grey' }}>
                                {todo.todo.Weeks} | 12 sessions
                            </div>
                        </div>
                        <div className='right-card'>
                            <button className='edit-button'>
                                <MdMode color='grey' size='25px' />
                            </button>
                            <button className='delete-button' onClick={delCard}>
                                <MdDelete color='red' size='25px' />
                            </button>
                            <button className='dropdown' onClick={openDropdown}>
                                <AiOutlineCaretDown color='#32CD32' size='25px' />
                            </button>
                        </div>
                    </div>
                    {show && (
                        <div>
                            <div className='divider'></div>
                            <div className="dates">
                                <div className="start-date">
                                    <div className='description' style={{ color: 'grey' }}>
                                        Start Date
                                    </div>
                                    <div className='s-date'>25 January 2020</div>
                                </div>
                                <div className="end-date">
                                    <div className='description' style={{ color: 'grey' }}>
                                        End Date
                                    </div>
                                    <div className='e-date'>19 February 2020</div>
                                </div>
                                <div className='update_button'>
                                    <button class="ui green button">Update</button>
                                </div>
                            </div>
                            <div className="buttons">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btncheck1" style={{ marginLeft: '20px' }} >Sunday</label>

                                    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btncheck2" style={{ marginLeft: '20px' }}>Monday</label>

                                    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btncheck3" style={{ marginLeft: '20px' }}>Tuesday</label>

                                    <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btncheck4" style={{ marginLeft: '20px' }}>Wednesday</label>

                                    <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btncheck5" style={{ marginLeft: '20px' }}>Thursday</label>

                                    <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btncheck6" style={{ marginLeft: '20px' }}>Friday</label>

                                    <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="btncheck7" style={{ marginLeft: '20px', marginRight: '20px' }}>Saturday</label>
                                </div>
                            </div>
                        </div>)}
                </div>
            )}
        </div>

    )

}

export default Card;