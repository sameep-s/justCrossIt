import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faNotesMedical, faRecycle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    // const linkStyleSidebar = ({ isActive }) => ({
    //     fontWeight: isActive ? "bolder" : "",
    //     backgroundColor: isActive ? "var(--danger-shade)" : "",
    //     color: isActive ? "red" : "",
    // })

    return (
        <>
            <aside className='container__main__sidebar pos-stick '>
                <div className="container__inner_siderbar  pt-2">
                    <ul>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faUserCircle} /> <span className='ml-2'>Profile</span></li>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faNotesMedical} /> <span className='ml-2'>Notes</span></li>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faArchive} /> <span className='ml-2'>Archives</span></li>
                        <li className='p-1 pl-4'><FontAwesomeIcon icon={faRecycle} /> <span className='ml-2'>Trash</span></li>

                        {/* <NavLink to={"/videoListing"} style={linkStyleSidebar}>
                            <li className='p-1 pl-4'><FontAwesomeIcon icon={faHouse} /> <span className='ml-2'>Home</span></li>
                        </NavLink> */}
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;