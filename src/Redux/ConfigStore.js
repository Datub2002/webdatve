import {applyMiddleware, combineReducers, createStore,} from 'redux';
import thunk from 'redux-thunk'
import { CarouselReducer } from './Reducer/CarouselReducer';
import {InfoTheaterReducer} from './Reducer/InfoTheaterReducer';
import LoadingReducer from './Reducer/LoadingReducer';
import {MovieManageReducer} from './Reducer/MovieManageReducer'
import {TheaterManagerReducer} from './Reducer/TheaterManagerReducer';
import { TicketManageReduce } from './Reducer/TicketManageReduce';
import {UserManageReducer} from './Reducer/UserManageReducer';
const rootReducer = combineReducers({
    // state uwngs duwng
    CarouselReducer,
    MovieManageReducer,
    TheaterManagerReducer,
    InfoTheaterReducer,
    UserManageReducer,
    TicketManageReduce,
    LoadingReducer
    
    
})
export const store = createStore(rootReducer,applyMiddleware(thunk));
