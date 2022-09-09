
import React, { ReactNode, useState} from "react";
import {EmployeesContext} from "./Context";
import {Filter} from "../../../types/filter";

type Props = {
    children?: ReactNode,
};
const EmployeesProvider = (props: Props) => {

    const rowsPerPage = 10;
    const [order, setOrder] = useState<string>('DESC');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filters, setFilters] = useState<Filter[]>([]);


    const {
        children
    } = props;

    const value = React.useMemo(() => ({
        order,
        setOrder,
        currentPage,
        setCurrentPage,
        rowsPerPage,
        filters,
        setFilters
    }),[
        order,
        currentPage,
        filters,
    ])

    return (
        <EmployeesContext.Provider value={value}>
            { children }
        </EmployeesContext.Provider>
    )

};

export default EmployeesProvider;