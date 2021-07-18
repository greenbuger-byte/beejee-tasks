import React from 'react';
import {PaginationComponent, PaginationItem} from "./Pagination.elements";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {useActions} from "../../hook/useActions";
import BxsArrowToRightIcon from "../Icons/BxsArrowToRightIcon";
import BxArrowToLeftIcon from "../Icons/BxArrowToLeftIcon";

const Pagination = () => {
    const {total_page, currentPage} = useTypedSelector(state => state.task);
    const {getCurrentPage} = useActions();
    let paginate = [];
    for(let i = 1; i<=total_page; i++){
        paginate.push(i);
    }
    // eslint-disable-next-line array-callback-return
    const paginateArray  = paginate.map( p =>
    { if( (currentPage - 3 < 0 && p < 4 ) || (currentPage - 2 < p  && currentPage + 2 > p)  || (currentPage  === total_page && p > total_page - 3 ) )
        return <PaginationItem key={p} onClick={() => getCurrentPage(p)} active = {currentPage === p} >{p}</PaginationItem>
    })
    return (<>
        {total_page > 1 &&    <PaginationComponent>
            { currentPage > 2 && <PaginationItem  onClick={() => getCurrentPage(1)} active = {currentPage === 1} > <BxArrowToLeftIcon/> </PaginationItem>}
            {paginateArray}
            { currentPage < total_page-1 && <PaginationItem  onClick={() => getCurrentPage(total_page)} active = {currentPage === total_page} > <BxsArrowToRightIcon/> </PaginationItem>}
        </PaginationComponent>}
    </>

    );
};

export default Pagination;