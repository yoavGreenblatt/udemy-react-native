import { NavigationActions } from 'react-navigation';

let navigator;
// let means we want to reasign this variable in some point in the future  
// we now have some storage mechanism inside this file 
// this is going to be called with some nav object, the acutall thing that comes from react navigation, that is going to alow us to navigate through different screens 
export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    );
};