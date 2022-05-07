import React from 'react';
import './linkContainer.css';

const LinkContainer = ({ dataHeading, dataLinks }) => {
    return (
        <>
            <div className="container__footer__links m-4">
                <div className="footer__links__heading">
                    {dataHeading}
                </div>

                <ul>
                    {dataLinks?.map((link) => <li key={link}> <a href="#">{link}</a> </li>)}
                </ul>

            </div>
        </>
    );
}

export default LinkContainer;