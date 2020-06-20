import React, {useState} from 'react';
import { StyleSheet } from 'react-native'
import { Text, Input, Button} from 'react-native-elements';
import Spacer from './Spacer';


const AuthForm = ({ headerText, errorMessage, onSubmit, sumbitButtomText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    return (
        <>
        <Spacer/>
        <Spacer/>
        <Spacer>
        <Text h3>{headerText}</Text>
        </Spacer>    
        <Input 
            label="Email" 
            value={email}
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
            secureTextEntry     
            />       
        { 
          errorMessage ? 
        <Text style={styles.errorMessage}>{errorMessage}</Text> 
        : null 
        }
        <Spacer>
        <Button title={sumbitButtomText} onPress={() => onSubmit({ email, password })} />
        </Spacer>
        </>
      );
      
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        borderWidth: 5,
        borderColor: '#dcc5e8', 
        opacity: 1,     
        color: 'pink',
        marginLeft: 15,
        // marginTop: 15,       
    }
});
export default AuthForm


 
