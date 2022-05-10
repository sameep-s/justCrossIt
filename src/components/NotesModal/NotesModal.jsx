import React, { useState } from 'react';
import './notesModal.css';
import ReactQuill from 'react-quill';
import { ColorPalette, PrioritySelector } from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";

const NotesModal = ({ setIsModalOpen }) => {

    const [noteBody, setNoteBody] = useState("")
    const [labelSelectorOpen, setLabelSelectorOpen] = useState(false);
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const [prioritySelectorOpen, setPrioritySelectorOpen] = useState(false);

    function changeHandler(e) {
        setNoteBody(e)
    }

    return (
        <>
            <div className="container__overlay__addNote pos-fix flex jc-center a-item-center p-3">
                <div className="container__add__note  flex jc-center a-item-center">
                    <div className="container__add__note__inner m-4 flex flex-col jc-center a-item-center">
                        <div className="add__note__title mt-1 mb-1">
                            Add Note
                        </div>
                        <input
                            type="text"
                            className='input-txt input__title'
                            placeholder='Enter Title Of The Note'
                        />
                        <ReactQuill
                            className=''
                            theme='snow'
                            onChange={(e) => changeHandler(e)}
                            placeholder="Write Note Body"
                        />

                        <div className="note__label__container flex mt-1">
                            <div className="label__note ">
                                too Good
                            </div>
                        </div>

                        <div className="note__priority__container mt-1 flex a-item-center">
                            <span>Priority:</span>
                            <div className="priority__value">
                                High
                            </div>
                        </div>

                        <div className="add__notes__actions__container flex a-item-center mt-2 pl-2 pr-2">
                            <div className="notes__action__container flex a-item-center">

                                <div className="label__selector pos-rel flex a-item-center jc-center">
                                    <FontAwesomeIcon className='icon__notes__action' onClick={() => setLabelSelectorOpen(!labelSelectorOpen)} icon={faTag}></FontAwesomeIcon>
                                    {
                                        labelSelectorOpen
                                        &&
                                        <div className="label__selector__modal pos-abs">
                                            <form
                                                action="submit"
                                                onSubmit={(e) => {
                                                    e.preventDefault()
                                                }}
                                            >
                                                <input type="text" className='input-txt' placeholder='Add a Label' />
                                            </form>

                                            <div className="labels__container">
                                                <div className="label__name flex p-1">
                                                    <input type="checkbox" name="BlackImp" id="" />
                                                    <label htmlFor="BlackImp" className='ml-1 '> VVIMP</label>
                                                </div>
                                            </div>

                                            <div className="label__selector__overlay pos-fix" onClick={() => setLabelSelectorOpen(!labelSelectorOpen)}></div>
                                        </div>
                                    }

                                </div>

                                {/* color pattele */}
                                <ColorPalette {...{ colorPaletteOpen, setColorPaletteOpen }} />
                                {/* here colorpallatte */}


                                {/* pSelector here */}
                                <PrioritySelector {...{ prioritySelectorOpen, setPrioritySelectorOpen }} />

                            </div>

                            <div className="actions__btn__container">
                                <button className="btn btn-danger">Cancel</button>
                                <button className="btn btn-primary">Add Note</button>
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