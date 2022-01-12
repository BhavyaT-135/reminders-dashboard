import React from 'react';
import './card.css';
import { MdDelete } from "react-icons/md";
import { MdMode } from "react-icons/md";

const UserCard = () => {
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='left'>
                    <div className='header'>Winter Training Schedule</div>
                    <div className='description' style={{ color: 'grey' }}>
                        4 weeks | 12 sessions
                    </div>
                </div>
                <div className='right'>
                    <button className='edit-button'>
                        <MdMode color='grey' size='35px' />
                    </button>
                    <button className='delete-button'>
                        <MdDelete color='red' size='35px' />
                    </button>
                </div>
            </div>
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
        </div>
    )
}

export default UserCard;