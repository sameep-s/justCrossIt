import React, { useState } from 'react';
import "./notes.css";
import { Navbar, Sidebar, NotesModal } from "../../components";





const Notes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar />
            <div className='container__main__notes flex flec-col'>
                <Sidebar />
                <main className='container__notes__body flex jc-center'>
                    <div className="container__notes__body_inner pt-2">
                        <div className="notes__container__heading flex a-item-center">
                            <div className="notes__body__heading">
                                My Notes
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Note
                            </button>
                        </div>

                        {isModalOpen && <NotesModal {...{ setIsModalOpen }} />}

                    </div>
                </main>
            </div>
        </>
    )
}

export default Notes;