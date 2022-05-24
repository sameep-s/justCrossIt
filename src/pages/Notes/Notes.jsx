import React, { useState } from 'react';
import "./notes.css";
import { Navbar, Sidebar, NotesModal, NotesCard, Filters } from "../../components";
import { useNotes } from '../../context';
import { filterPriority, filterColor, filterLabel } from '../../services/filter-services';


const Notes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { state_note: { notes, filter_priority, filter_color, filter_label } } = useNotes();
    const token = localStorage.getItem('tokenNotes');

    const priorityFilteredNotes = filterPriority(notes, filter_priority);
    const colorFilteredNotes = filterColor(priorityFilteredNotes, filter_color);
    const labelFilteredNotes = filterLabel(colorFilteredNotes, filter_label);

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

                        {/* filters here */}
                        <Filters />

                        <div className="container__notes__area flex">
                            {labelFilteredNotes.map((note) => <NotesCard key={note._id} {...{ note }} />)}
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
};

export default Notes;