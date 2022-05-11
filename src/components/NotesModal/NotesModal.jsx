import React, { useState } from 'react';
import './notesModal.css';
import ReactQuill from 'react-quill';
import { ColorPalette, PrioritySelector, LabelSelector } from '../index';

const defaultNote = {
    title: "",
    body: "",
    priority: "LOW",
    labels: [],
    backgroundColor: "(255,255,255)",
}


const NotesModal = ({ setIsModalOpen, update }) => {

    const [note, setNote] = useState(defaultNote)
    const [labelSelectorOpen, setLabelSelectorOpen] = useState(false);
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const [prioritySelectorOpen, setPrioritySelectorOpen] = useState(false);

    function addNoteHandler() {
        console.log(`addnote`, note);
        setNote({ ...defaultNote });
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="container__overlay__addNote pos-fix flex jc-center a-item-center p-3">
                <div className="container__add__note  flex jc-center a-item-center">
                    <div className="container__add__note__inner m-4 flex flex-col jc-center a-item-center">
                        <div className="add__note__title mt-1 mb-1">
                            {update ? "Update" : "Add"} Note
                        </div>
                        <input
                            type="text"
                            className='input-txt input__title'
                            placeholder='Enter Title Of The Note'
                            onChange={(e) => setNote({ ...note, title: e.target.value })}
                            value={note.title}
                        />
                        <ReactQuill
                            className=''
                            theme='snow'
                            placeholder="Write Note Body"
                            onChange={(e) => setNote({ ...note, body: e })}
                            value={note.body}
                        />

                        <div className="note__label__container flex mt-1">
                            {note.labels?.map((label) =>
                                <div key={label} className="label__note ">
                                    {label}
                                </div>
                            )}

                        </div>

                        <div className="note__priority__container mt-1 flex a-item-center">
                            <span>Priority:</span>
                            <div className="priority__value">
                                {note.priority}
                            </div>
                        </div>

                        <div className="add__notes__actions__container flex a-item-center mt-2 pl-2 pr-2">
                            <div className="notes__action__container flex a-item-center">
                                {/* labelSelector */}
                                <LabelSelector {...{ labelSelectorOpen, setLabelSelectorOpen, note, setNote }} />

                                {/* color pattele */}
                                <ColorPalette {...{ colorPaletteOpen, setColorPaletteOpen, note, setNote }} />

                                {/* prioritySelector here */}
                                <PrioritySelector {...{ prioritySelectorOpen, setPrioritySelectorOpen, note, setNote }} />
                            </div>
                            <div className="actions__btn__container">
                                <button className="btn btn-danger">Cancel</button>

                                {update ?
                                    <button className="btn btn-primary" >Update Note</button>
                                    :
                                    <button className="btn btn-primary" onClick={addNoteHandler}>Add Note</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay__notes__invisible pos-fix" onClick={() => setIsModalOpen(false)} />
            </div>
        </>
    );
};

export default NotesModal;