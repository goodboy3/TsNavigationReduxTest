import { all, takeLatest } from "redux-saga/effects";
import { ActionType } from "./ActionType";
import { LoginSaga } from "./sagas/LoginSaga";



const rootSaga = function* root()
{
    yield all([
        takeLatest(ActionType.Login_doing, LoginSaga),
    ])
}

export default rootSaga