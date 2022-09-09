import React from 'react';
import './Body.scss';
import Table from "../Table/Table";
import useBody from "./useBody";
import ListCard from "../ListCard/ListCard";

const Body = () => {

    const { listItems } = useBody();
    return (
        <div className="body w-100">
            <div className="title-table d-none d-sm-flex align-items-center text-secondary-color">

                <div className="row  w-100">
                    <div className="col-2 center">
                        Estado
                    </div>
                    <div className="col-1 center col-md-1">
                        Monto
                    </div>
                    <div className="col-3 col-md-2 center">
                        País
                    </div>
                    <div className="d-none d-md-flex  col-2 center">
                        Fecha
                    </div>
                    <div className="col-md-4 col-5  justify-content-end d-flex">
                        Empleado
                    </div>
                    <div className="col-1 center">
                        ID
                    </div>
                </div>

            </div>
            <div className="d-none d-sm-inline mt-md-0">
                <Table listItems={listItems} />
            </div>

            <div className="d-block d-sm-none mt-0">
                <ListCard items={listItems} />
            </div>
        </div>
    );
};


export default Body;