import React, { useEffect } from 'react';
import { v4 as uId } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUsersData, viewUser } from '../reduxToolKit/slices/usersSlice';
import Loader from './Loader';
import '../css/UsersLists.css';

const UserLists = () => {
    const {
        usersData: { usersLists, loading },
    } = useSelector((store) => store);
    const dispatch = useDispatch();

    const userViewHandler = (id) => {
        let selectedUser = usersLists.find((userList) => id === userList.id);
        dispatch(viewUser(selectedUser));
    };

    useEffect(() => {
        dispatch(getUsersData());
    }, []);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <section className='user-container'>
                    <div className='user-headings'>
                        <div>Name</div>
                        <div>UserName</div>
                        <div>Email</div>
                        <div>City</div>
                    </div>
                    <div className='userData'>
                        {usersLists?.map(
                            ({
                                id,
                                name,
                                username,
                                email,
                                address: { city },
                            }) => {
                                return (
                                    <NavLink
                                        className='userList'
                                        to={'/view'}
                                        key={uId()}
                                        style={{ textDecoration: 'none' }}
                                        onClick={() => userViewHandler(id)}
                                    >
                                        <div>{name}</div>
                                        <div>{username}</div>
                                        <div>{email}</div>
                                        <div>{city}</div>
                                    </NavLink>
                                );
                            }
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default UserLists;
