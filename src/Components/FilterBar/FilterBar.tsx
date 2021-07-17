import React from 'react';
import {FilterBarComponent, FilterBlock} from "./FilterBar.elements";
import {Button} from "../../GlobalStyles";
import CreateIcon from "../Icons/CreateIcon";
import CreateTask from "../CreateTask/CreateTask";
import {useActions} from "../../hook/useActions";
import {useTypedSelector} from "../../hook/useTypedSelector";

const FilterBar = () => {
    const {isVisible} = useTypedSelector(state => state.task);
    const {isVisibleState} = useActions();
    return (
        <FilterBarComponent>
            <FilterBlock onClick={() => isVisibleState(true)}><Button><CreateIcon/> Добавить задачу</Button></FilterBlock>
            {isVisible && <CreateTask/>}
        </FilterBarComponent>
    );
};

export default FilterBar;