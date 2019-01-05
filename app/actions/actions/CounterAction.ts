import { ActionType } from "../ActionType";

export interface CounterActionInterface
{
    type: ActionType;
    count: number;
}

export class CounterAction
{
    static increment(num:number):CounterActionInterface
    {
        return {
            type: ActionType.Counter_increment,
            count:num,
        }
    }

    static decrement(num:number): CounterActionInterface
    {
        return {
            type: ActionType.Counter_decrement,
            count: num,
        }
    }
}
