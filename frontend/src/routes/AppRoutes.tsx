import React, { Suspense } from 'react'

import { CSpinner } from '@coreui/react';


import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import Education from '../pages/Education/Education';
import AboutUs from '../pages/aboutUs';
import NotFoundPage from '../pages/NotFoundPage';
import Account from '../pages/Account';
import Settings from '../pages/Settings';
import Course from '../pages/Course';
import Test from '../pages/Test';

type Props = {
    children?: React.ReactNode
}

function AppRoutes({ children }: Props) {
    return (

        <Suspense fallback={<CSpinner color="primary" />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/education" element={<Education />} />
                <Route path="/account/:UserId" element={<Account />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/courseId/:id" element={<Course />} />
                <Route path="/test/:id" element={<Test />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes