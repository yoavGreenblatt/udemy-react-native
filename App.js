import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import { Provider as AuthProvider} from './src/context/AuthContext' 
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext' 
import { Provider as TrackProvider } from './src/context/TrackContext' 


const switchNavigator = createSwitchNavigator({
  ResloveAuth: ResolveAuthScreen,
  // referncing another flow, hence the lower case, refering another grouping of differe
  loginFlow: createStackNavigator ({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
});

// export default createAppContainer(switchNavigator)

const App = createAppContainer(switchNavigator);

//wrapping it inside of our own custom component 
export default () => {
  return (
    <TrackProvider>
     <LocationProvider>
       <AuthProvider>
         {/* our app coomponent os creatoed entiery by react navigation */}
         <App ref= {(navigator) => { setNavigator(navigator) }} />
       </AuthProvider>
     </LocationProvider>
    </TrackProvider>
  );
};

// aside - ngrok is going to open up a direct connection from your express api and give you a public url that you can have your phone look at to get access to the api  

