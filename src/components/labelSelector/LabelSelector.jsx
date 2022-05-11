import React, { useState } from 'react';
import './labelSelector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";


const LabelSelector = ({ labelSelectorOpen, setLabelSelectorOpen, note, setNote }) => {
    const [label, setLabel] = useState("");

    function addLabel() {
        note.labels.includes(label) || setNote({ ...note, labels: [...note.labels, label] })
        setLabel("")
    }

    function notesHandler(label) {
        note.labels.includes(label) ?
            setNote({ ...note, labels: note.labels.filter((labelNotes) => label !== labelNotes) })
            :
            setNote({ ...note, labels: [...note.labels, label] })
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
                            {note?.labels?.map((item) =>
                                <div key={item} className="label__name flex p-1">
                                    <input type="checkbox" onChange={() => notesHandler(item)} checked={note.labels.includes(item)} name={item} id={item} />
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