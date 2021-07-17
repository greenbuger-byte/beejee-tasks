import * as loginUserCreators  from './userActionCreators';
import * as taskCreators from './tastActionCreators';
import * as siteCreators from './siteActionCreator';

export  default {
    ...loginUserCreators , ...taskCreators, ...siteCreators
}