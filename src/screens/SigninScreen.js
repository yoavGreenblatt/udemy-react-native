import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents} from 'react-navigation'; //does the same thing as the listenter 'didfocus'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext} from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext) 

   return (
    <View style={styles.container}>
        {/* NavigationEvents doesn't diplay anything on the screen, 
        instead we can pass it callback funtions */}
        <NavigationEvents 
          onWillFocus={clearErrorMessage}
          onDidFocus={() => {}}
        //   onWillFBlur={() => { clearErrorMessage() }} // we have function a function that is calling another function
          onWillFBlur={clearErrorMessage}
          onDidFBlur={() => {}}
        />
        <AuthForm
        headerText='Sign in to your account'
        errorMessage={state.errorMessage}
        sumbitButtomText='Sign In' 
        // onsubmit is going to automatically call the signin function with an object
        // that has the email and password that the user entered.
        onSubmit={signin}
        />
        <NavLink
        text="don't have an account? Sign up here"
        routeName='Signup'
        />
     </View> 
  );
};

SigninScreen.navigationOptions = () => {
  return {
    // header: null
    headerShown: false
  };
};

const styles = StyleSheet.create({
    container: {

        // flex 1 causing the view to expand and fill up as much vertical space that it can
        flex: 1,
        justifyContent: 'center',
        // forcing our contnet to move up -
        marginBottom: 250,
        // marginTop: 80
    },
});

export default SigninScreen;