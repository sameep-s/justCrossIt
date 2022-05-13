import React from 'react';
import './footer.css';
import { LinkContainer } from '../index';
import { footerData } from '../../frontend-data/footer-data';

const Footer = () => {
    return (
        <>
            <footer className="container__main__footer flex jc-center">
                <div className="container__inner__footer p-2 flex jc-center ">
                    {footerData?.map((data) => <LinkContainer key={data._id}  {...data} />)}
                </div>
            </footer>
        </>
    );
};

export default Footer;