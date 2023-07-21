import React from 'react';
import NavigationBar from '../Shared/Navbar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;