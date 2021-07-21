import * as loginUserCreators  from './userActionCreators';
import * as taskCreators from './tastActionCreators';
import * as siteCreators from './siteActionCreator';

const AllActionCreators = {
    ...loginUserCreators , ...taskCreators, ...siteCreators
}
export  default AllActionCreators;