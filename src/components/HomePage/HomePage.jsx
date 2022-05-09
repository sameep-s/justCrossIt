import React from 'react';
import "./homePage.css";
import { Navbar, Sidebar } from "../";
import ReactQuill from 'react-quill';

function changeHandler() {
    console.log(`change1`);
}

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className='container__main__homePage flex flec-col'>
                <Sidebar />
                <ReactQuill theme='snow' onChange={changeHandler} />
            </div>
        </>
    )
}

export default HomePage;