import React from 'react';
import { Navbar, Sidebar } from '../../components';
import './profile.css';

const Profile = () => {

    const user = JSON.parse(localStorage.getItem('userNotes'));

    return (
        <>
            <Navbar noSearch />
            <div className="container__main__profile flex">
                <Sidebar />

                <div className="container__user__profile flex jc-center a-item-center">
                    <div className="user__profile__container p-4">
                        <div className="img__user flex jc-center avatar-lg">
                            <img
                                src="https://avatars.dicebear.com/v2/male/:seed.svg"
                                alt="user-Image"
                                className="avatar-lg img__avatar"
                            />
                        </div>

                        <div className="container__user__info flex flex-col jc-center">
                            <div className="info__field flex a-item-center">
                                <div className="info__field__label">firstName:</div>
                                <div className="info__field__value ">{user.firstName}</div>
                            </div>

                            <div className="info__field flex a-item-center">
                                <div className="info__field__label">lastName:</div>
                                <div className="info__field__value ">{user.lastName}</div>
                            </div>

                            <div className="info__field flex a-item-center">
                                <div className="info__field__label">Email:</div>
                                <div className="info__field__value ">{user.email}</div>
                            </div>

                            <div className="info__field flex a-item-center">
                                <div className="info__field__label">ID:</div>
                                <div className="info__field__value ">{user._id}</div>
                            </div>

                            <div className="info__field flex a-item-center">
                                <div className="info__field__label">Joined on:</div>
                                <div className="info__field__value ">{user.createdAt}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Profile;