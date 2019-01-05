
import configureStore from './store/Store';
import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import AppNavi from './navigation/Navigation';


const store = configureStore();
export default class Root extends Component<any, any>
{
    render()
    {
        return (
            <Provider store={store}>
                <AppNavi/>
            </Provider>
        )
    }
}