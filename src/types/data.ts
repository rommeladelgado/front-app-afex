import {Employee} from "./employee";

export interface Data {
    totalResult: number;
    totalPage: number;
    currentPage: number;
    order:string;
    rowsPerPage:number;
    items: Employee[];
}