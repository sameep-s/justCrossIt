import React, { useState } from 'react';
import "./notes.css";
import { Navbar, Sidebar, NotesModal, NotesCard } from "../../components";
import { useNotes } from '../../context';


const Notes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { state_note: { notes } } = useNotes();
    const token = localStorage.getItem('tokenNotes');

    return (
        <>
            <Navbar />
            <div className='container__main__notes flex flec-col'>
                <Sidebar />
                <main className='container__notes__body flex jc-center'
                >
                    <div className="container__notes__body_inner pt-2">
                        <div className="notes__container__heading flex a-item-center">
                            <div
                                className="notes__body__heading "
                            >
                                My Notes
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Note
                            </button>
                            {isModalOpen && <NotesModal {...{ setIsModalOpen }} />}
                        </div>

                        <div className="filter__notes__container">
                            filter notes
                        </div>

                        <div className="container__notes__area flex">
                            {notes.map((note) => <NotesCard key={note._id} {...{ note }} />)}
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
};

export default Notes;