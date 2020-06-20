import React, { useContext } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation' // a react component that makes sure that automatically that none of the contnet inside this screen is goiing to be renddred begins the status bar at the top  of the screen   
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
     <SafeAreaView forceInset ={{ top:"always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
          <Button title="Sign out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
 
export default AccountScreen;