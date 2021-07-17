import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionsCreator from '../store/creators';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionsCreator, dispatch);
}