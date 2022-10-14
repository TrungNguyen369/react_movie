import {combineReducers} from 'redux';
import reducerMovie from './reduceMovie';

const rootReducer = combineReducers({
    infoMovie: reducerMovie
});

export default rootReducer;