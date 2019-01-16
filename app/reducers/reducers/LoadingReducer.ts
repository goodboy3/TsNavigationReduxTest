import { LoginActionInterface, UserInfo } from "../../actions/actions/LoginAction";
import { ActionType } from "../../actions/ActionType";

export interface LoadingStateInterface
{
    isLoading:boolean
}

export class LoadingReducer
{
    static readonly initialState: LoadingStateInterface = {
        isLoading: false,
    }

    static loading(state: LoadingStateInterface = LoadingReducer.initialState, action: LoginActionInterface): LoadingStateInterface
    {
        switch (action.type)
        {
            case ActionType.Loading_show:
                return {
                    ...state,
                    isLoading:true,
                };
                break;
            case ActionType.Loading_hide:
                return {
                    ...state,
                    isLoading:false
                };
                break;

            default:
                return state;
                break;
        }
    }
}

export default LoadingReducer.loading;