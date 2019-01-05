import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { IndexReducers } from '../reducers/IndexReducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default function configureStore(initialState?:any)
{
    const store = createStoreWithMiddleware(IndexReducers.rootReducer, initialState);
    return store;
}