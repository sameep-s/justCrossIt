import React, { useState, useEffect } from 'react';
import './notesModal.css';
import ReactQuill from 'react-quill';
import { ColorPalette, PrioritySelector, LabelSelector } from '../index';
import { useNotes } from '../../context';
import { addToNotes, updateNote } from '../../services/notes-services';

const defaultNote = {
    _id: 1,
    title: "",
    body: "",
    priority: "LOW",
    labels: [],
    backgroundColor: "rgb(255,255,255)",
}


const NotesModal = ({ setIsModalOpen, setIsModalOpenUpdate, note, update }) => {

    const [noteModal, setNoteModal] = useState(update ? note : defaultNote)
    const [labelSelectorOpen, setLabelSelectorOpen] = useState(false);
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const [prioritySelectorOpen, setPrioritySelectorOpen] = useState(false);

    const { dispatch_note } = useNotes()
    const token = localStorage.getItem('tokenNotes');

    function cancelHandler() {
        update ? setIsModalOpenUpdate(false) : setIsModalOpen(false);
        setNoteModal(defaultNote);
    }

    function addNoteHandler() {
        addToNotes(dispatch_note, noteModal, token);
        setIsModalOpen(false);
    }

    function updatehandler() {
        updateNote(dispatch_note, note._id, noteModal, token);
        setIsModalOpenUpdate(false);
    }

    return (
        <>
            <div className="container__overlay__addNote pos-fix flex jc-center a-item-center p-3">
                <div className="container__add__note  flex jc-center a-item-center" style={{ backgroundColor: `${noteModal.backgroundColor}` }}>
                    <div className="container__add__note__inner m-4 flex flex-col jc-center a-item-center">
                        <div className="add__note__title mt-1 mb-1">
                            {update ? "Update" : "Add"} Note
                        </div>
                        <input
                            style={{ backgroundColor: `${noteModal.backgroundColor}` }}
                            type="text"
                            className='input-txt input__title'
                            placeholder='Enter Title Of The Note'
                            onChange={(e) => setNoteModal({ ...noteModal, title: e.target.value })}
                            value={noteModal.title}
                        />
                        <ReactQuill
                            className=''
                            theme='snow'
                            placeholder="Write Note Body"
                            onChange={(e) => setNoteModal({ ...noteModal, body: e })}
                            value={noteModal.body}
                        />

                        <div className="note__label__container flex mt-1">
                            {noteModal.labels?.map((label) =>
                                <div key={label} className="label__note ">
                                    {label}
                                </div>
                            )}

                        </div>

                        <div className="note__priority__container mt-1 flex a-item-center">
                            <span>Priority:</span>
                            <div className="priority__value">
                                {noteModal.priority}
                            </div>
                        </div>

                        <div className="add__notes__actions__container flex a-item-center mt-2 pl-2 pr-2">
                            <div className="notes__action__container flex a-item-center">
                                {/* labelSelector */}
                                <LabelSelector {...{ labelSelectorOpen, setLabelSelectorOpen, noteModal, setNoteModal }} />

                                {/* color pattele */}
                                <ColorPalette {...{ colorPaletteOpen, setColorPaletteOpen, noteModal, setNoteModal }} />

                                {/* prioritySelector here */}
                                <PrioritySelector {...{ prioritySelectorOpen, setPrioritySelectorOpen, noteModal, setNoteModal }} />
                            </div>
                            <div className="actions__btn__container">
                                <button className="btn btn-danger" onClick={cancelHandler}>Cancel</button>

                                {update ?
                                    <button className="btn btn-primary" onClick={updatehandler} >Update Note</button>
                                    :
                                    <button className="btn btn-primary" onClick={addNoteHandler}>Add Note</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay__notes__invisible pos-fix" onClick={() => update ? setIsModalOpenUpdate(false) : setIsModalOpen(false)} />
            </div>
        </>
    );
};

export default NotesModal;