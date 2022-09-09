import React from "react";
import './Table.scss';
import {Employee} from "../../../../types/employee";

type Props = {
    listItems: Employee[]
}
const Table = (props: Props) => {


    const { listItems } = props;

    return (
        <div className="table-container">
            {
                (!!listItems && listItems.length > 0) && (
                    listItems.map((el, index) => (
                        <div key={el.id} className="row custom-tr w-100 text-primary-color ">
                            <div className="col-2 justify-center">
                                { el.state }
                            </div>
                            <div className="col-1 justify-center col-md-1">
                                { el.mount }
                            </div>
                            <div className="col-3 col-md-2 justify-center">
                                { el.country }
                            </div>
                            <div className="d-none d-md-flex col-2 justify-center">
                                { el.date }
                            </div>
                            <div className="col-md-4 col-5  justify-content-end d-flex">
                                <div className="mx-1">
                                    <div className="text">
                                        { el.name }
                                    </div>
                                    <div className="text text-secondary-color justify-content-end d-flex">
                                        { el.type }
                                    </div>
                                </div>
                                <div className="image mt-1 ">
                                    <img height="38" src={'https://drive.google.com/uc?export=view&id='+el.image}  alt=""/>
                                </div>
                            </div>
                            <div className="col-1 justify-center">
                                { el.id}
                            </div>
                        </div>
                    ))
                )
            }


        </div>
    );
};


export default Table;