import React from "react";
import {EmployeesContext} from "../../Context/Context";
import {useQuery} from "@apollo/client";
import {LIST_ITEMS_QUERY} from "../../../../graphql/querys/listItems";
import {Employee} from "../../../../types/employee";


type ReturnValues = {
    listItems: Employee[],
};

const useBody = (): ReturnValues => {

    const {
        filters,
        order,
        rowsPerPage,
        currentPage,
    } = React.useContext(EmployeesContext);

    const { data } = useQuery(LIST_ITEMS_QUERY ,
        {
            variables: {
                filters,
                order,
                rowsPerPage,
                currentPage,
            }
        });

    return {
        listItems: data?.getItems.items,

    };
};

export default useBody;