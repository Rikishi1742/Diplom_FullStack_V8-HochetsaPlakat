import React from 'react'
import RedirectToLogin from '../components/RedirectToLogin';
import AppRoutes from '../routes/AppRoutes'

import "./AppContent.css";

import Nav from '../components/Header/Nav';

type Props = {}

function AppContent({ }: Props) {

    return (
        <>
        <RedirectToLogin>

            <Nav />
            <AppRoutes />
            
            </RedirectToLogin>
        </>
    )
}

export default AppContent