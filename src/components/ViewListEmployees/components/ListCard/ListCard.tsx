// @ts-ignore
import React from 'react';
import {Employee} from "../../../../types/employee";
import './ListCard.scss';

type Props = {
    items: Employee[]
};

const ListCard = (props: Props) => {

    const { items } = props;
    return (
        <div className="list-card">
            {(!!items && items.length > 0) && (
                items.map((el, index) => (
                    <div key={el.id} className="custom-card w-100 px-2 py-2 bg-white mb-2 mx-0">
                        <div className="profile d-inline-block">
                            <div className="image mt-1 float-start ">
                                <img height="38" src={'https://drive.google.com/uc?export=view&id='+el.image}  alt=""/>
                            </div>
                            <div className="mx-2 float-start">
                                <div className="text">
                                    { el.name }
                                </div>
                                <div className="text text-secondary-color ">
                                    { el.type }
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div>
                                <span className="text-secondary-color">ID:</span> {el.id}
                            </div>
                            <div className="mx-1">
                                <span className="text-secondary-color">País:</span> {el.country}
                            </div>
                            <div className="mx-1">
                                <span className="text-secondary-color">Monto:</span> {el.mount}
                            </div>
                            <div className="mx-1">
                                <span className="text-secondary-color">Estado:</span> {el.state}
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}

export default ListCard;