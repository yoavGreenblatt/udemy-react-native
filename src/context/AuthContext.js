// at some points in the futuer when the other library of asyncStorage is compatible with expo, we'll change the import statment - from ''
import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef';

//going to be called by react whenever we call that dispatch function
const authRuducer = (state, action) => {
  switch (action.type) {
      case 'add_error':
      // overwriting the property we want to update. this new state objet will rerender our whole app, whenever we call dispatch
        return {...state, errorMessage: action.payload}
        // storing our token from the payload inside our state 
      case 'signin':
      // when a user signs up/in we need to reset our entire state object, sign up - here's the token and we should not longer have an error message. rebuilding the state object from scratch 
      return { errorMessage: '', token: action.payload}  
      case 'clear_error_message':
      return { ...state, errorMessage:'' };  
      case 'signout':
      return { token: null, errorMessage:'' };  
      default:
      return state;
   }
};

//were trying to sign the user in automatically using just information on the useres device
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type:'signin', payload: token})
    navigate('TrackList');
  }  else {
    navigate('Signup')
  }
};


const clearErrorMessage = dispatch => () => {
  dispatch({ type:'clear_error_message' })
}


const signup = (dispatch) => {
  return async ({ email, password }) => {
   // 1. make api request to sign up with that email and password
   // 2. if we sign up, modify our state and say that we are authenticated
   // after signing up we get back a jwt 
   // 3. if signing up fails we need to reflect an error message

// if everything goes correcly we'll get our response and we can extract our token 
   try {
    const response = await trackerApi.post('/signup', { email, password })
    ////respone.date is an object that has a token property
    console.log(response.data)

    // settting a porperty in the storage called token
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })

    navigate('TrackList')
   }
   catch (err) {
    // console.log(err.response.data)

    // we call dispatch anytime we want to update our state
    dispatch( {type: 'add_error', payload: 'Something went wrong with sign up' })
   }
  };
};

// refactored
const signin = dispatch => async ({ email, password }) => {
     //Try to sign in
     //Handle success by updating state
     //handle failure by showing error message
      try {
        //getting the token
        const response = await trackerApi.post('/signin', { email, password })

        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList');

      } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
      }
    };
  
  const signout = dispatch => async () => {
      await AsyncStorage.removeItem('token');
      dispatch({ type: 'signout' });
      navigate('loginFlow');
    };
 


export const { Provider, Context } = createDataContext(
    authRuducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    // we can use our jwt as a proof that we are signed in
    { token: null, errorMessage: '' }
);
