import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Gists from '../view/pages/gists';

export default function GetRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Gists />} />
        </Routes>
    );
}
