import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { IndexReducers } from '../reducers/IndexReducers';
import rootSaga from "../actions/SagaRoot";

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
export default function configureStore(initialState?:any)
{
    const store = createStoreWithMiddleware(IndexReducers.rootReducer, initialState);

    sagaMiddleware.run(rootSaga)
    
    return store;
}

