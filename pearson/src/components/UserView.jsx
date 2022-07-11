import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uId } from 'uuid';

import '../css/UserView.css';

const UserView = () => {
    const {
        usersData: { viewList },
    } = useSelector((store) => store);
    const {
        id,
        name,
        username,
        email,
        address: { city },
    } = viewList;
    return (
        <section className='user-viewList'>
            <h6>
                Hello{' '}
                <em>
                    <strong style={{ padding: '1rem' }}>
                        {viewList?.name}
                    </strong>
                </em>
            </h6>
            <div key={uId()} className='user-viewItem'>
                <div className='item'>
                    <div>ID</div>
                    <div>{id}</div>
                </div>
                <div className='item'>
                    <div>Name</div>
                    <div>{name}</div>
                </div>
                <div className='item'>
                    <div>UserName</div>
                    <div>{username}</div>
                </div>
                <div className='item'>
                    <div>Email</div>
                    <div>{email}</div>
                </div>
                <div className='item'>
                    <div>City</div>
                    <div>{city}</div>
                </div>
            </div>
        </section>
    );
};

export default UserView;
