import { LoginActionInterface, UserInfo } from "../../actions/actions/LoginAction";
import { ActionType } from "../../actions/ActionType";

export interface LoginStateInterface
{
    status: string,
    isSuccess: boolean,
    user:UserInfo
}

export class LoginReducer
{
    static readonly initialState: LoginStateInterface = {
        status: "未登陆",
        isSuccess: false,
        user: null,
    }

    static login(state: LoginStateInterface = LoginReducer.initialState, action: LoginActionInterface): LoginStateInterface
    {
        switch (action.type)
        {
            case ActionType.Login_doing:
                return {
                    ...state,
                    status: '登陆中',
                    isSuccess: false,
                    user:null
                };
                break;
            case ActionType.Login_done:
                return {
                    ...state,
                    status: '登陆成功',
                    isSuccess: true,
                    user: action.user,
                };
                break;
            case ActionType.Login_error:
                return {
                    ...state,
                    status: '登陆失败',
                    isSuccess: false,
                    user: null
                };
                break;
            
            default:
                return state;
                break;
        }
    }
}

export default LoginReducer.login;