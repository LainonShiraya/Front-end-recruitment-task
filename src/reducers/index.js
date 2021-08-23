import loadingReducer from './loading';
import displayReducer from './picturesDisplayed';
import hasMoreReducer from './hasMore';
import pageReducer from './pageNumber';
import zoomReducer from './Zoom';
import {combineReducers} from 'redux';

const rootReducer =  combineReducers({
    loading: loadingReducer,
    display: displayReducer,
       more: hasMoreReducer,
       page: pageReducer,
       zoom: zoomReducer
})

export default rootReducer;