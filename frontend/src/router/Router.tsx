import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Tools from '../utils/Tools';

import Home from '../pages/Home'

const Routing = () => {
    return (
        <Router>
            <Routes>
                { /* Route par defaut */}

                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
};
export default Routing;