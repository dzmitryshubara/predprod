import { combineReducers } from "redux";

import person from './person';
import filter from './filter';

const rootReducer = combineReducers({ person, filter });

export default rootReducer;
