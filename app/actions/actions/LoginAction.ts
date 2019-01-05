import { ActionType } from "../ActionType";

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
    static Login()
    {
        return (dispatch:any) =>
        {
            dispatch(LoginAction.StartLogin());

            //模拟
            let result = fetch('https://www.baidu.com/')
                .then((res) =>
                {
                    dispatch(LoginAction.LoginSuccess({name:"zhang",age:24}));
                }).catch((e) =>
                {
                    dispatch(LoginAction.LoginError());
                })
        }
    }

    private static StartLogin():LoginActionInterface
    {
        return{
            type: ActionType.Login_doing,
            user:null,
        }
    }

    private static LoginSuccess(user:UserInfo)
    {
        return {
            type: ActionType.Login_done,
            user:user,
        }
    }

    private static LoginError()
    {
        return {
            type: ActionType.Login_error,
            user:null,
        }
    }
}