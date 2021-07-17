import React, {useEffect} from 'react';
import {PaginationComponent, PaginationItem} from "./Pagination.elements";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useActions} from "../../hook/useActions";

const Pagination = () => {
    const {total_task_count, currentPage} = useTypedSelector(state => state.task);
    const {getCurrentPage} = useActions();
    let paginate = [];
    for(let i = 0; i<Math.ceil(total_task_count/3); i++){
        paginate.push(i);
    }

    return (
        <PaginationComponent>
            {paginate.map((p) =>  <PaginationItem key={p} onClick={() => getCurrentPage(p+1)} active = {currentPage === p+1} >{p+1}</PaginationItem> )}
        </PaginationComponent>
    );
}

export default Pagination;