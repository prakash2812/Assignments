import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uId } from 'uuid';

const menuLists = [
    { id: 0, name: 'Home', to: '/' },
    { id: 1, name: 'List Items', to: '/lists' },
    { id: 2, name: 'View', to: '/view' },
];

const MenuBar = () => {
    return (
        <>
            {menuLists.map(({ name, to }) => {
                return (
                    <NavLink
                        key={uId()}
                        to={to}
                        className={({ isActive }) =>
                            isActive ? 'active' : 'disactive'
                        }
                    >
                        {name}
                    </NavLink>
                );
            })}
        </>
    );
};

export default MenuBar;
