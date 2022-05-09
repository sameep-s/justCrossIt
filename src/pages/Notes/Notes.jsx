import React, { useState } from 'react';
import "./notes.css";
import { Navbar, Sidebar } from "../../components";
import ReactQuill from 'react-quill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";




const Notes = () => {

    const [noteBody, setNoteBody] = useState("")

    console.log(`noteBody: `, typeof noteBody);

    function changeHandler(e) {
        setNoteBody(e)
    }

    return (
        <>
            <Navbar />
            <div className='container__main__notes flex flec-col'>
                <Sidebar />
                <main className='container__notes__body flex jc-center'>
                    <div className="container__notes__body_inner pt-2">
                        <div className="notes__container__heading flex">
                            <div className="notes__body__heading">
                                Notes
                            </div>
                            <button className="btn btn-primary">Add Note</button>
                        </div>


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
                                        {/* <div className="label__note ">
                                            too Good
                                        </div> */}
                                    </div>

                                    <div className="note__priority__container mt-1 flex a-item-center">
                                        <span>Priority:</span>
                                        <div className="priority__value">
                                            High
                                        </div>
                                    </div>

                                    <div className="add__notes__actions__container flex a-item-center mt-2 pl-2 pr-2">
                                        <div className="notes__action__container flex a-item-center">

                                            <div className="label__selector flex a-item-center jc-center">
                                                <FontAwesomeIcon className='icon__notes__action' icon={faTag}></FontAwesomeIcon>
                                            </div>

                                            <div className="colorPicker">

                                            </div>

                                            <div className="prioritySelector">
                                                <FontAwesomeIcon className='icon__notes__action' icon={faArrowDownShortWide}></FontAwesomeIcon>
                                            </div>

                                        </div>

                                        <div className="actions__btn__container">
                                            <button className="btn btn-danger">Cancel</button>
                                            <button className="btn btn-primary">Add Note</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overlay__notes__invisible pos-fix" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Notes;