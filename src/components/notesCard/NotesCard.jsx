import React, { useState } from 'react';
import './notesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faPen, faRecycle, faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import { moveToArchive, restoreFromArchives, deleteFromArchives } from '../../services/archive-services';
import { deleteFromNotes } from '../../services/notes-services';
import NotesModal from '../NotesModal/NotesModal';
import { useNotes } from '../../context';
import { moveToTrash, restoreFromTrash, deleteFromTrash } from '../../services/trash-services';

const NotesCard = ({ note, archive, trash }) => {
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const { dispatch_note } = useNotes();

    const { _id, title, body, priority, labels, backgroundColor } = note;
    const token = localStorage.getItem('tokenNotes');


    function archiveHandler() {
        moveToArchive(dispatch_note, token, _id, note);
    }

    function trashHandler() {
        moveToTrash(dispatch_note, token, _id, note);
    }

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

                    {archive || trash || <FontAwesomeIcon icon={faArchive} onClick={() => archiveHandler()} />}
                    {archive || trash || <FontAwesomeIcon icon={faRecycle} onClick={() => trashHandler()} />}
                    {archive || trash || <FontAwesomeIcon onClick={() => setIsModalOpenUpdate(true)} icon={faPen} />}
                    {archive || trash || <FontAwesomeIcon icon={faTrash} onClick={() => deleteFromNotes(dispatch_note, _id, token)} />}

                    {(archive || trash) && <FontAwesomeIcon icon={faTrashRestore} onClick={() => archive ? restoreFromArchives(dispatch_note, token, _id)
                        :
                        restoreFromTrash(dispatch_note, token, _id)
                    } />}

                    {(archive || trash) && <FontAwesomeIcon icon={faTrash} onClick={() => archive ? deleteFromArchives(dispatch_note, token, _id)
                        :
                        deleteFromTrash(dispatch_note, token, _id)
                    } />}

                </div>
            </div>
            {isModalOpenUpdate && <NotesModal {...{ setIsModalOpenUpdate, ...{ note } }} update />}

        </>
    )
}

export default NotesCard;