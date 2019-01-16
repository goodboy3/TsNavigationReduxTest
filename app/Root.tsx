
import configureStore from './store/Store';
import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './navigation/Navigation';
import LoadingPage from './pages/LoadingPage';
import { NavigationService } from './navigation/NavigationService';


const store = configureStore();
export default class Root extends Component<any, any>
{
    render()
    {
        return (
            <Provider store={store}>
                <AppContainer ref={
                    (navigatorRef) =>
                    {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }
                } />
                <LoadingPage />
            </Provider>
        )
    }
}