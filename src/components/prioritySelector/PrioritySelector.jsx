import React from 'react';
import './prioritySelector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";

const PrioritySelector = ({ prioritySelectorOpen, setPrioritySelectorOpen, note, setNote }) => {
    return (
        <>
            <div className="prioritySelector pos-rel">
                <FontAwesomeIcon className='icon__notes__action' icon={faArrowDownShortWide} onClick={() => setPrioritySelectorOpen(!prioritySelectorOpen)}></FontAwesomeIcon>
                {
                    prioritySelectorOpen
                    &&
                    <div className="container__prioritySelecotr pos-abs">
                        <div className="prioritySelector__modal">

                            <div className="priority__input__container">
                                <input type="radio" id="HIGH" name="prioritySelector" onChange={() => setNote({ ...note, priority: 'HIGH' })} value='HIGH' checked={note.priority === "HIGH"} />
                                <label htmlFor="HIGH">HIGH</label>
                            </div>

                            <div className="priority__input__container">
                                <input type="radio" id="MEDIUM" name="prioritySelector" onChange={() => setNote({ ...note, priority: 'MEDIUM' })} value='MEDIUM' checked={note.priority === "MEDIUM"} />
                                <label htmlFor="MEDIUM">MEDIUM</label>
                            </div>

                            <div className="priority__input__container">
                                <input type="radio" id="LOW" name="prioritySelector" onChange={() => setNote({ ...note, priority: 'LOW' })} value='LOW' checked={note.priority === "LOW"} />
                                <label htmlFor="LOW">LOW</label>
                            </div>

                            <div className="prioritySelector__overlay pos-fix" onClick={() => setPrioritySelectorOpen(false)}></div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default PrioritySelector;