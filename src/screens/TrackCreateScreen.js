import '../_mockLocation'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text} from 'react-native-elements'
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation'  
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

// getting access to isFocused flag via withNavigationFocus which is a prop that we'er destructuring 
const TrackCreateScreen = ({ isFocused }) => {
    const { state : { recording }, addLocation } = useContext(LocationContext);
    
    // been added after creating the useLocation hook
    // we can recieve our err value, and call use location
    //we're passing our hook as a callback
    // const [err] = useLocation((location) => addLocation(location))

    // // refatoring
    // const [err] = useLocation(isFocused, addLocation);  //??

    // refatoring #2 (because we need to pass the recording bulean)

       // const [err] = useLocation(isFocused, (location) => {
    //   addLocation(location, state.recording)
    // });  //??

      // the entire goal of usecallback is to limit the number of times that we create a new callback function
      // any time any varilable in the array changes were going to rebuild the callback from scratch
    const callback = useCallback( (location) => {
      addLocation(location, recording)
    }, 
    [recording]
    );
    const [err] = useLocation(isFocused || recording, callback); 


    // expecting to see 'true' which means - yes, this screen is foc used. if we navigate away. we gaet 'false'
    // console.log(isFocused)

  return (
    <SafeAreaView forceInset ={{ top:"always" }}>
        <Text h2>Create a Track</Text>
        <Map /> 
        {/* <NavigationEvents onWillBlur={() => console.log('leaving')} /> */}
        {err ? <Text>Please enable location services</Text> : null}
          <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);