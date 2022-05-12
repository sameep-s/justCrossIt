import React, { useState } from 'react';
import './notesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faRecycle, faRedo, faTrash } from '@fortawesome/free-solid-svg-icons';
import NotesModal from '../NotesModal/NotesModal';
import { deleteFromNotes } from '../../services/notes-services';
import { useNotes } from '../../context';

const NotesCard = (noteModal) => {
    const { title, body, priority, labels, backgroundColor } = noteModal;
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const { dispatch_note } = useNotes();
    const token = localStorage.getItem('tokenNotes');

    console.log(`tokenLocalStorage`, token);


    return (
        <>
            <div className="card__notes__container flex flex-col" style={{ backgroundColor: backgroundColor }}>
                <div className="card__notes__title">{title}</div>
                <div className="card__notes__body" dangerouslySetInnerHTML={{ __html: body }}></div>
                <div className="card__notes__priority">Priority: {priority}</div>
                <div className="card__priority__labelArea flex">
                    {labels.map((tag) => <div key={tag} className="label__card__note">{tag}</div>)}

                </div>
                <div className="card__notes__actions__container flex jc-space-around">
                    <FontAwesomeIcon icon={faArchive} />
                    <FontAwesomeIcon icon={faRecycle} />
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteFromNotes(dispatch_note, noteModal._id, token)} />
                    <FontAwesomeIcon onClick={() => setIsModalOpenUpdate(true)} icon={faRedo} />
                </div>
            </div>
            {isModalOpenUpdate && <NotesModal {...{ setIsModalOpenUpdate, ...{ noteModal } }} update />}

        </>
    )
}

export default NotesCard;