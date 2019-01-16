import { combineReducers } from "redux";
import  CounterReducer, { CounterStateInterface }  from "./reducers/CounterReducer";
import LoginReducer,{ LoginStateInterface } from "./reducers/LoginReducer";
import LoadingReducer,{ LoadingStateInterface } from "./reducers/LoadingReducer";


export interface CombinReducersInterface
{
    counter: CounterStateInterface,
    login: LoginStateInterface,
    loading: LoadingStateInterface;
}


export class IndexReducers
{
    static rootReducer: any = combineReducers<CombinReducersInterface>(
        {
            counter: CounterReducer,
            login: LoginReducer,
            loading: LoadingReducer,
        }
    );
}

