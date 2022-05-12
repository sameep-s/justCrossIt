import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../index';
import './landingPage.css';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className='main__landingPage__container flex flex-col jc-center a-item-center'>
                <div className="container__info">
                    Take Notes Using The Best Notes Taking App and Just <span className='crossIt'>Cross</span> Your Goals.
                </div>
                <Link to={'/notes'}>
                    <button className='btn btn-primary'>Get Started</button>
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;