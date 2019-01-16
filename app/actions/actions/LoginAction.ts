import { ActionType } from "../ActionType";
import { LoadingAction } from "./LoadingAction";
import { NavigationService } from "../../navigation/NavigationService";
import { PageList } from "../../navigation/PageListEnum";

export interface LoginActionInterface
{
    type: ActionType;
    user: UserInfo;
}

export interface UserInfo
{
    name: string;
    age: number;
}

export class LoginAction
{
    // static Login()
    // {
    //     return (dispatch:any) =>
    //     {
    //         dispatch(LoginAction.StartLogin());
    //         dispatch(LoadingAction.ShowLoadingPage());

    //         //模拟
    //         fetch('https://www.baidu.com/')
    //             .then((res) =>
    //             {
    //                 dispatch(LoginAction.LoginSuccess({ name: "zhang", age: 24 }));
    //                 NavigationService.navigate(PageList.Main, { status:"已登陆"});
    //                 dispatch(LoadingAction.HideLoadingPage());
    //             }).catch((e) =>
    //             {
    //                 dispatch(LoginAction.LoginError());
    //             })
    //     }
    // }

    static StartLogin():LoginActionInterface
    {
        return{
            type: ActionType.Login_doing,
            user:null,
        }
    }

    static LoginSuccess(user:UserInfo)
    {
        return {
            type: ActionType.Login_done,
            user:user,
        }
    }

    static LoginError()
    {
        return {
            type: ActionType.Login_error,
            user:null,
        }
    }
}