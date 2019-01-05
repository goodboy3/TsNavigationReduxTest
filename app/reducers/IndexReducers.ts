import { combineReducers } from "redux";
import  CounterReducer, { CounterStateInterface }  from "./reducers/CounterReducer";
import LoginReducer,{ LoginStateInterface } from "./reducers/LoginReducer";


export interface CombinReducersInterface
{
    counter: CounterStateInterface,
    login:LoginStateInterface
}


export class IndexReducers
{
    static rootReducer: any = combineReducers<CombinReducersInterface>(
        {
            counter: CounterReducer,
            login: LoginReducer
        }
    );
}

