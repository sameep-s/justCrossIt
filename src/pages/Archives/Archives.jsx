import React from 'react';
import { Navbar, Sidebar, NotesCard } from '../../components';
import './archives.css';
import { useNotes } from '../../context';


const Archives = () => {
    const { state_note: { archives } } = useNotes();

    return (
        <>
            <Navbar noSearch />
            <div className='container__main__archive flex flec-col'>
                <Sidebar />
                <main className='container__archive__body flex jc-center'
                >
                    <div className="container__archive__body_inner pt-2">
                        <div className="archive__container__heading flex a-item-center">
                            <div
                                className="archive__body__heading ">
                                Archives
                            </div>
                        </div>

                        <div className="container__archive__area flex">
                            {archives?.map((note) => <NotesCard key={note._id} {...{ note }} archive />)}
                        </div>

                    </div>
                </main>
            </div>

        </>
    )
}

export default Archives;