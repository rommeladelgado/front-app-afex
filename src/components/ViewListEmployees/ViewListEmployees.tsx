import React from 'react';
import './ViewListEmployees.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import EmployeesProvider from "./Context/Provider";


const ViewListEmployees = () => {

    return (
        <EmployeesProvider >
            <div className="home mx-2 mx-md-0 d-flex justify-content-center">
                <div className="row  mt-2 col-md-11 col-12 col-lg-8 ">
                    <Header />
                    <Body />
                </div>
            </div>
        </EmployeesProvider>
    )
};


export default ViewListEmployees;
