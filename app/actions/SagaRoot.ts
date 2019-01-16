import { all, takeLatest } from "redux-saga/effects";
import { ActionType } from "./ActionType";
import { SagaFunc } from "./sagas/LoginSaga";


const rootSaga = function* root()
{
    yield all([
        takeLatest(ActionType.Login_doing, SagaFunc.fetchLogin),
    ])
}

export default rootSaga