import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const AppNavi = createStackNavigator({
    
    Login: { screen: LoginPage },
    Main: { screen: MainPage },
    
});

const AppContainer = createAppContainer(AppNavi);
export default AppContainer