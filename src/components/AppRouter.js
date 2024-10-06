import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes} from "../routes";
import {SETTING_ROUTE} from "../utils/consts";


const AppRouter = () => {
    return (
        <div>
            <Routes>
                {
                    publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component />} exact />)
                }
                <Route path="*" element={<Navigate to={SETTING_ROUTE} />} />
            </Routes>
        </div>
    );
};

export default AppRouter;