import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import "./notes.css";
import { Navbar, Sidebar, NotesModal } from "../../components";
import axios from 'axios';


const note1 = {
    _id: uuid(),
    title: "DefaultNOtesDiss",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium tenetur repellat assumenda architecto a.",
    priority: "LOW",
    labels: ['high', 'sore', 'pruple'],
    color: "red"
}



const loginHandler = async (email, password) => {
    try {
        const { data: { foundUser, encodedToken }, status } = await axios.post("/api/auth/login", {
            email: email,
            password: password
        });
        console.log(status);
        if (status === 200) {
            localStorage.setItem('userNotes', JSON.stringify(foundUser));
            localStorage.setItem('tokenNotes', encodedToken);
        }
    }
    catch (e) {
        console.error(e);
    }
}

async function getNotesHandler(token) {
    try {
        const res = await axios.get('/api/notes', {
            headers: {
                authorization: token
            }
        })
        console.log(`notes`, res);
    } catch (e) {
        console.error(e);
    }
}

function deleteHandler() {
    localStorage.removeItem('userNotes');
    localStorage.removeItem('token');
}

async function addToNotes(noteUser, userToken) {
    try {
        const { data: { notes } } = await axios.post('/api/notes', {
            note: noteUser
        },
            {
                headers:
                {
                    authorization: userToken
                }
            });
        console.log(`response`, notes);
    } catch (e) {
        console.error(e);
    }
}


loginHandler("sam@gmail.com", 's123');
const user = localStorage.getItem('userNotes');
const token = localStorage.getItem('tokenNotes');


addToNotes(note1, token);
getNotesHandler(token)

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
    );
};

export default Notes;