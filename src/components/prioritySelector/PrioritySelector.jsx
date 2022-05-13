import React from 'react';
import './prioritySelector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";

const PrioritySelector = ({ prioritySelectorOpen, setPrioritySelectorOpen, noteModal, setNoteModal }) => {
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
                                <input type="radio" id="HIGH" name="prioritySelector" onChange={() => setNoteModal({ ...noteModal, priority: 'HIGH' })} value='HIGH' checked={noteModal.priority === "HIGH"} />
                                <label htmlFor="HIGH">HIGH</label>
                            </div>

                            <div className="priority__input__container">
                                <input type="radio" id="MEDIUM" name="prioritySelector" onChange={() => setNoteModal({ ...noteModal, priority: 'MEDIUM' })} value='MEDIUM' checked={noteModal.priority === "MEDIUM"} />
                                <label htmlFor="MEDIUM">MEDIUM</label>
                            </div>

                            <div className="priority__input__container">
                                <input type="radio" id="LOW" name="prioritySelector" onChange={() => setNoteModal({ ...noteModal, priority: 'LOW' })} value='LOW' checked={noteModal.priority === "LOW"} />
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