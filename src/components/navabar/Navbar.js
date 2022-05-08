import React from 'react';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../util-context';

const Navbar = () => {


    // const { user, setUser } = useAuth();
    // const navigate = useNavigate();

    // const logoutHandler = () => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user');
    //     setUser(null);
    //     navigate('/', { replace: true });
    // }


    return (
        <>
            <nav className="navbar pos-stick flex jc-center a-item-center">
                <div className="nav-inner flex a-item-center jc-space-btw">
                    <div className="navbar--container-strt flex a-item-center">
                        {/* <Link to={'/'}>
                            <div className="brand-name">JustCrossIt</div>
                        </Link> */}
                        <div className="brand-name">Just<span className='crossIt'> Cross </span>It</div>
                    </div>
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
                    <div className="navbar--container-end flex a-item-center">

                        <div className="nav-icon-container">
                            <div className="nav-cart-icon">
                                {/* <Link to={'/videoListing'}>
                                    <FontAwesomeIcon icon={faHome} className="nav__icons" ></FontAwesomeIcon>
                                </Link> */}
                            </div>
                        </div>

                        {/* {user ?

                            <button
                                // onClick={logoutHandler}
                                className="btn-nav jc-center a-item-center"
                            >
                                Log Out
                            </button>
                            :

                            <Link to={"/login"} className="btn-nav jc-center a-item-center"
                            >Login
                            </Link>
                        } */}
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;