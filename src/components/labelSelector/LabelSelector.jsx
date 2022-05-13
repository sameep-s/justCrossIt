import React, { useState } from 'react';
import './labelSelector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";


const LabelSelector = ({ labelSelectorOpen, setLabelSelectorOpen, noteModal, setNoteModal }) => {
    const [label, setLabel] = useState("");

    function addLabel() {
        noteModal.labels.includes(label) || setNoteModal({ ...noteModal, labels: [...noteModal.labels, label] })
        setLabel("")
    }

    function notesHandler(label) {
        noteModal.labels.includes(label) ?
            setNoteModal({ ...noteModal, labels: noteModal.labels.filter((labelNotes) => label !== labelNotes) })
            :
            setNoteModal({ ...noteModal, labels: [...noteModal.labels, label] })
    }

    return (
        <>
            <div className="label__selector pos-rel flex a-item-center jc-center">
                <FontAwesomeIcon className='icon__notes__action' onClick={() => setLabelSelectorOpen(!labelSelectorOpen)} icon={faTag}></FontAwesomeIcon>
                {
                    labelSelectorOpen
                    &&
                    <div className="label__selector__modal pos-abs">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                addLabel();
                            }}
                        >
                            <input
                                type="text"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                                className='input-txt' placeholder='Add a Label ...'
                            />
                        </form>

                        <div className="labels__container">
                            {noteModal?.labels?.map((item) =>
                                <div key={item} className="label__name flex p-1">
                                    <input type="checkbox" onChange={() => notesHandler(item)} checked={noteModal.labels.includes(item)} name={item} id={item} />
                                    <label htmlFor={item} className='ml-1 '>{item}</label>
                                </div>
                            )}

                        </div>
                        <div className="label__selector__overlay pos-fix" onClick={() => setLabelSelectorOpen(!labelSelectorOpen)}></div>
                    </div>
                }

            </div>
        </>
    )
}

export default LabelSelector;