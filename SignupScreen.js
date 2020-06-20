import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents} from 'react-navigation'; 

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext) 

   return (
    <View style={styles.container}>
        <NavigationEvents 
         onWillFocus={clearErrorMessage}
         />
        <AuthForm
        headerText='Sign up for Tracker'
        errorMessage={state.errorMessage}
        sumbitButtomText='Sign Up' 
        // onSubmit={({ email, password }) => signup({ email, password })}
        onSubmit={signup}
        />
        <NavLink
        text='Already have an account? Sign in instead'
        routeName='Signin'
        />
     </View>     
  );
};

SignupScreen.navigationOptions = () => {
  return {
    // header: null
    headerShown: false
  };
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#abc2e8',
        borderWidth: 3,
        borderRadius: 10,
        // flex 1 causing the view to expand and fill up as much vertical space that it can
        flex: 1,
        justifyContent: 'center',
        // forcing our contnet to move up -
        marginBottom: 250
    },
});

export default SignupScreen;