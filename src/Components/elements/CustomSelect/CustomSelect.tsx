import React from 'react';
import {
    CustomSelectBody,
    CustomSelectComponent,
    CustomSelectLabel,
    CustomSelectList,
    CustomSelectOption
} from "./CustomSelect.elements";
import {useTypedSelector} from "../../../hook/useTypedSelector";
import {SortFieldTaskType, SortFieldTaskTypeRu} from "../../../types/task";
import {useActions} from "../../../hook/useActions";
import ChevronCompactDownIcon from "../../Icons/ChevronCompactDownIcon";
import {BlockHiddenMobile} from "../../../GlobalStyles";

const CustomSelect = () => {
    const [isOpen, changeIsOpen] = React.useState<boolean>(false);
    const {sortField} = useTypedSelector(state => state.task);
    const {changeSortField} = useActions();
    const sortFieldRu: {[index:string]:any} = SortFieldTaskTypeRu;
    return (
        <CustomSelectComponent onClick={()=>changeIsOpen(prev => !prev)}>
            <CustomSelectBody> <CustomSelectLabel><BlockHiddenMobile>Сортировка:</BlockHiddenMobile></CustomSelectLabel> {sortFieldRu[sortField.toUpperCase()]} <ChevronCompactDownIcon/></CustomSelectBody>
            {isOpen && <CustomSelectList onMouseLeave={()=>changeIsOpen(false)}>
                <CustomSelectOption onClick={() => changeSortField(SortFieldTaskType.ID)}>{SortFieldTaskTypeRu.ID}</CustomSelectOption>
                <CustomSelectOption onClick={() => changeSortField(SortFieldTaskType.EMAIL)}>{SortFieldTaskTypeRu.EMAIL}</CustomSelectOption>
                <CustomSelectOption onClick={() => changeSortField(SortFieldTaskType.USERNAME)}>{SortFieldTaskTypeRu.USERNAME}</CustomSelectOption>
                <CustomSelectOption onClick={() => changeSortField(SortFieldTaskType.STATUS)}>{SortFieldTaskTypeRu.STATUS}</CustomSelectOption>
            </CustomSelectList> }
        </CustomSelectComponent>
    );
};

export default CustomSelect;