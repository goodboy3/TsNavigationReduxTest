import { CounterActionInterface } from "../../actions/actions/CounterAction";
import { ActionType } from "../../actions/ActionType";

export interface CounterStateInterface
{
    count: number;
}

export class CounterReducer
{
    static readonly initialState:CounterStateInterface = {
        count:0
    }

    static counter(state: CounterStateInterface = CounterReducer.initialState, action: CounterActionInterface):CounterStateInterface
    {
        switch (action.type) {
            case ActionType.Counter_increment:
                return {
                    ...state,
                    count: state.count + action.count,
                };
                break;
            case ActionType.Counter_decrement:
                return {
                    ...state,
                    count:state.count-action.count,
                };
                break;
            default:
                return state;
                break;
        }
    }
}

export default CounterReducer.counter;