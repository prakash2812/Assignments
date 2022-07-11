import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLists from './UserLists';
import HeroBlock from './HeroBlock';
import UserView from './UserView';
import Page404 from './Page404';
const GlobalRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HeroBlock />} />
            <Route path='/lists' element={<UserLists />} />
            <Route path='/view' element={<UserView />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    );
};

export default GlobalRouter;
