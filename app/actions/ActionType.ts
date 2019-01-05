// export class ActionType
// {
//     static Login: string = "Login";

//     static GetWeather_init = "GetWeather_init";
//     static GetWeather_success = "GetWeather_success";
// }

export enum ActionType
{
    Counter_increment = "Counter_increment",
    Counter_decrement = "Counter_decrement",
    
    Login_doing = "Login_doing",
    Login_done = "Login_done",
    Login_error ="login_error"
}