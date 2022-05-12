import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faNotesMedical, faRecycle, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

    return (
        <>
            <aside className='container__main__sidebar pos-stick '>
                <div className="container__inner_siderbar  pt-2">
                    <ul>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faUserCircle} /> <span className='ml-2'>Profile</span></li>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faNotesMedical} /> <span className='ml-2'>Notes</span></li>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faArchive} /> <span className='ml-2'>Archives</span></li>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faRecycle} /> <span className='ml-2'>Trash</span></li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;