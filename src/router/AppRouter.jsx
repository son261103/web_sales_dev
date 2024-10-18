import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';
import Breadcrumbs from "../components/common/Breadcrumbs";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <>
                                    {/* Breadcrumbs chỉ được hiển thị sau khi có Router */}
                                    <Breadcrumbs currentPage={route.breadcrumbName} />
                                    <route.component />
                                </>
                            }
                        />
                    ))}
                    <Route path="/" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
