import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faNotesMedical, faRecycle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    function styleActiveNav({ isActive }) {
        return {
            fontWeight: isActive ? "bolder" : "",
            color: isActive ? "var(--dark-primary)" : "",
            backgroundColor: isActive ? "blue" : "",
        }
    }

    return (
        <>
            <aside className='container__main__sidebar pos-stick '>
                <div className="container__inner_siderbar  pt-2">
                    <ul>
                        <NavLink to={"/profile"} style={styleActiveNav}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faUserCircle} /> <span className='ml-2'>Profile</span></li>
                        </NavLink>

                        <NavLink to={"/notes"} style={styleActiveNav}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faNotesMedical} /> <span className='ml-2'>Notes</span></li>

                        </NavLink>

                        <NavLink to={"/archives"} style={styleActiveNav}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faArchive} /> <span className='ml-2'>Archives</span></li>
                        </NavLink>

                        <NavLink to={"/trash"} style={styleActiveNav}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faRecycle} /> <span className='ml-2'>Trash</span></li>
                        </NavLink>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;