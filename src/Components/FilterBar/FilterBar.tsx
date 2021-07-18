import React from 'react';
import {FilterBarComponent, FilterBlock, FilterRightBlock, SortDirectionReset} from "./FilterBar.elements";
import {BlockHiddenMobile, Button, IconButton} from "../../GlobalStyles";
import CreateIcon from "../Icons/CreateIcon";
import CreateTask from "../CreateTask/CreateTask";
import {useActions} from "../../hook/useActions";
import {useTypedSelector} from "../../hook/useTypedSelector";
import SortDescendingIcon from "../Icons/SortDescendingIcon";
import {SortDirectionTaskType} from "../../types/task";
import CustomSelect from "../elements/CustomSelect/CustomSelect";
import SortAscendingIcon from "../Icons/SortAscendingIcon";
import BxXIcon from "../Icons/BxXIcon";


const FilterBar = () => {
    const {isVisible, sortDirection} = useTypedSelector(state => state.task);
    const {isVisibleState, changeSortDirection} = useActions();

    return (
        <FilterBarComponent>
            <FilterBlock onClick={() => isVisibleState(true)}>
                <Button>
                    <CreateIcon fontSize={20} />
                    <BlockHiddenMobile>Добавить задачу</BlockHiddenMobile>
                </Button>
            </FilterBlock>
            <FilterBlock/>
            <FilterBlock>
                <FilterRightBlock>
                    {sortDirection!==null && <SortDirectionReset>
                        <IconButton  onClick={() => changeSortDirection(null)} size={15}><BxXIcon/></IconButton>
                    </SortDirectionReset>}
                    {sortDirection === null   &&
                    <IconButton onClick={() => changeSortDirection(SortDirectionTaskType.DESC)} size={40} margin={'0 15px'}> <SortDescendingIcon fontSize={20} /></IconButton>
                    }
                    {sortDirection === SortDirectionTaskType.ASC   &&
                        <IconButton onClick={() => changeSortDirection(SortDirectionTaskType.DESC)} size={40} margin={'0 15px'}> <SortDescendingIcon fontSize={20} /></IconButton>
                    }
                    {sortDirection === SortDirectionTaskType.DESC &&
                    <IconButton onClick={() => changeSortDirection(SortDirectionTaskType.ASC)} size={40} margin={'0 15px'}> <SortAscendingIcon fontSize={20} /></IconButton>
                    }
                    <CustomSelect/>
                </FilterRightBlock>
            </FilterBlock>
            {isVisible && <CreateTask/>}
        </FilterBarComponent>
    );
};

export default FilterBar;