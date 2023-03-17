import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../pages/Shared';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;
