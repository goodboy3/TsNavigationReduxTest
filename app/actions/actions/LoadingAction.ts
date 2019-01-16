import { ActionType } from "../ActionType";

export interface LoginActionInterface
{
    type: ActionType;
    isLoadingPageShow: boolean;
}

export class LoadingAction
{
    static ShowLoadingPage(): LoginActionInterface
    {
        return {
            type: ActionType.Loading_show,
            isLoadingPageShow: true,
        }
    }

    static HideLoadingPage(): LoginActionInterface
    {
        return {
            type: ActionType.Loading_hide,
            isLoadingPageShow: false,
        }
    }
}