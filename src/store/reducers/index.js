
import { combineReducers } from 'redux';
import { counterReducer } from '../slices/counter';

const rootReducer = combineReducers({
    counter: counterReducer

});

export default rootReducer;