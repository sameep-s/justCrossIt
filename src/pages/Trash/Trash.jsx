import React from 'react';
import { Navbar, Sidebar } from '../../components';
import './trash.css';

const Trash = () => {
    return (
        <>
            <Navbar />

            <div className='container__main__trash flex flec-col'>
                <Sidebar />
                <main className='container__trash__body flex jc-center'
                >
                    <div className="container__trash__body_inner pt-2">
                        <div className="trash__container__heading flex a-item-center">
                            <div
                                className="trash__body__heading "
                            >
                                Trash
                            </div>
                        </div>

                        <div className="container__trash__area flex">
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default Trash