import { call, put } from "redux-saga/effects";
import { delay } from 'redux-saga';
import { LoginAction } from "../actions/LoginAction";
import { HttpUtil } from "../../utils/HttpUtil";
import { NavigationService } from "../../navigation/NavigationService";
import { PageList } from "../../navigation/PageListEnum";
import { LoadingAction } from "../actions/LoadingAction";

export class SagaFunc
{
    static *fetchLogin(params)
    {
        try
        {
            //出loading
            console.log("出 loading");
            yield put(LoadingAction.ShowLoadingPage());
            yield delay(2000);
            let user = yield call(HttpUtil.FetchLogin, "https://www.baidu.com/");
            yield put(LoginAction.LoginSuccess(user))

            NavigationService.navigate(PageList.Main, { status: "已登陆" });
            //loading消失
            console.log("loading 消失");
            yield put(LoadingAction.HideLoadingPage());

        } catch (error)
        {
            console.log(error);
        }
    }
}

// export const LoginSaga = function* fetchLogin(params)
// {
//     try
//     {
//         //出loading
//         console.log("出 loading");
        
//         let user = yield call(HttpUtil.FetchLogin,"https://www.baidu.com/");
//         yield put(LoginAction.LoginSuccess(user))

//         NavigationService.navigate(PageList.Main, { status: "已登陆" });
//         //loading消失
//         console.log("loading 消失");
        
//     } catch (error) {
//         console.log(error);
//     }
// }

