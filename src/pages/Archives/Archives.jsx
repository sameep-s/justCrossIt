import React from 'react';
import { Navbar, Sidebar } from '../../components';
import './archives.css';

const Archives = () => {
    return (
        <>
            <Navbar />
            <div className='container__main__archive flex flec-col'>
                <Sidebar />
                <main className='container__archive__body flex jc-center'
                >
                    <div className="container__archive__body_inner pt-2">
                        <div className="archive__container__heading flex a-item-center">
                            <div
                                className="archive__body__heading ">
                                Archives
                            </div>
                        </div>

                        <div className="container__archive__area flex">
                        </div>

                    </div>
                </main>
            </div>

        </>
    )
}

export default Archives;