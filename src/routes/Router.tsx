import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ViewListEmployees from "../components/ViewListEmployees/ViewListEmployees";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route element={<ViewListEmployees />} path="/" />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
