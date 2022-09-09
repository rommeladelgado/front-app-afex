import React  from "react";
import {Filter} from "../../../types/filter";


const initialValue = {currentPage: 1, filters: [], order: 'DESC', rowsPerPage: 10};

export const EmployeesContext = React.createContext<{
    order: string,
    rowsPerPage: number,
    currentPage: number,
    filters: Filter[];
}>({...initialValue});