import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext) 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // console.log(state);
    //fragment can return muliple elements from this component but its not going to cause somthing to actually be diplayed on the screen 
   return (
       // a frament means dont show any wrappping element when this actually gets rendered on the screen 
    //  <> 
    // view helps to see the extents of our SignupScreen component. the view element has shrunk to fit the amount of the content 
    <View style={styles.container}>
        <Spacer>
        <Text h3>Sign Up For Tracker</Text>
        </Spacer>    
        <Input 
            label="Email" 
            value={email}
         // onChangeText={(newEmail) => setEmail(newEmail)}/>
            onChangeText={setEmail}
            autoCapitalize= "none"
            autoCorrect= {false}
            />
        <Spacer />    
        <Input 
            label="Password" 
            value={password}
            onChangeText={setPassword}
            autoCapitalize= "none"
            autoCorrect= {false}
            // secureTextEntry={true} 
            secureTextEntry     
            />       
        {/* if state.errorMessage has a value */}
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
        </Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Spacer>
          <Text style={styles.link}>Already have an account? sign in instead </Text>
          </Spacer>
        </TouchableOpacity>
     </View>
     
    //  </>
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
    errorMessage: {
        fontSize: 16,
        borderWidth: 5,
        borderColor: '#dcc5e8', 
        opacity: 1,     
        color: 'pink',
        marginLeft: 15,
        // marginTop: 15,       

    },
    link: {
        color: 'blue'
    }

});

export default SignupScreen;