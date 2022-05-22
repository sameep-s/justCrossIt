import React from 'react';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';

const Navbar = ({ noSearch }) => {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    function logoutHandler() {
        localStorage.removeItem('tokenNotes');
        localStorage.removeItem('userNotes');
        navigate('/', { replace: true })
        setUser(null);
    }

    return (
        <>
            <nav className="navbar pos-stick flex jc-center a-item-center">
                <div className="nav-inner flex a-item-center jc-space-btw">
                    <div className="navbar--container-strt flex a-item-center">
                        <Link to={'/'}>
                            <div className="brand-name">Just<span className='crossIt'> Cross </span>It</div>
                        </Link>
                    </div>

                    {
                        noSearch ||
                        <div className="navbar--container-middle flex a-item-center">
                            <button className="btn-search-nav">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="nav__icon_magnifying" ></FontAwesomeIcon>
                            </button>
                            <input
                                className="input-dark"
                                type="text"
                                name=""
                                id=""
                                placeholder="search"
                            />
                        </div>
                    }

                    <div className="navbar--container-end flex a-item-center">
                        <div className="nav-icon-container">
                            <div className="nav-cart-icon">
                                <FontAwesomeIcon icon={faHome} className="nav__icons" ></FontAwesomeIcon>
                            </div>
                        </div>
                        {
                            !user ?
                                <Link to='/login'>
                                    <button
                                        className="btn-nav jc-center a-item-center"
                                    >Login</button>
                                </Link>
                                :
                                <button
                                    className="btn-nav jc-center a-item-center"
                                    onClick={logoutHandler}
                                >
                                    Log Out
                                </button>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;