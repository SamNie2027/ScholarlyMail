import { Route, Routes } from "react-router-dom";
import React from 'react';
import { Home } from "./Home";
import { MailInfo } from "./MailInfo";

export const ScholarlyMail = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/' element={<MailInfo />}></Route>
        </Routes>
    );
}

