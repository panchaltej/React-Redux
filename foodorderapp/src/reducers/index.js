import {combineReducers} from 'redux';
import ItemReducer from './reducer-items';

const allReducers = combineReducers({
    items: ItemReducer
});

export default allReducers;

 