import React from 'react';
import './Header.scss';
import FilterListIcon from '@mui/icons-material/FilterList';

const Header = () => {
    return (
        <div className="header">
            <div className="h-100 d-flex justify-content-between align-items-center">
                <div className="">
                    <button className="filter-button text-primary-color">
                        AFEX
                    </button>
                </div>

                <div>
                    <div className="title text-primary-color">
                        Lista de empleados
                    </div>
                </div>
            </div>
        </div>
    );
}


export default  Header;