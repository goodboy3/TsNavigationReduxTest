import { NavigationActions } from 'react-navigation';

export class NavigationService
{
    static _navigator;

    static setTopLevelNavigator(navigatorRef)
    {
        NavigationService._navigator = navigatorRef;
    }

    static navigate(routeName, params)
    {
        NavigationService._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }
}


// add other navigation functions that you need and export them

