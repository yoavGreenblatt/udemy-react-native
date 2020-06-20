import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text} from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'  
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);

    const [err, setError] = useState(null);

    // const startWatching = async () => {
    //     try {
    //          await requestPermissionsAsync()
    //             await watchPositionAsync({
    //                 // getting the best accuracy - consumes battery but gives accuracy of meters
    //                 accuracy: Accuracy.BestForNavigation,
    //                 // getting an update once every second
    //                 timeInterval: 1000,
    //                 //getting an update once every 10 meters
    //                 distanceInterval: 10
    //                 // the callback function is going to take some location object from the expo location library, so the location object descrubes the user's actual location
    //             }, (location) => {
    //             console.log(location);
    //             });
    //     } catch (e) {
    //         setError(e)
    //     } 
    // };

    const startWatching = async () => {
        try {
            const {status} = await requestPermissionsAsync();
            if (status === 'granted') {
                /* Do location reading stuff we add in a few lectures.
                 * Fortunately watchPositionAsync() actually does throw an error
                 * so we don't need to manually throw one ourselves.
                */
               //watching users locatations and changes it over time
               await watchPositionAsync({
                   // getting the best accuracy - consumes battery but gives accuracy of meters
                   accuracy: Accuracy.BestForNavigation,
                   // getting an update once every second
                   timeInterval: 1000,
                   //getting an update once every 10 meters
                   distanceInterval: 10
                   // the callback funtion is going to take some location object from the expo location library, so the location object descrubes the user's actual location
               }, (location) => {
                   addLocation(location);
               });
            } else {
                throw new Error('Location permission not granted');
            }
        } catch (err) {
            setError(err);
        }
    }
    
    useEffect(() => {
      startWatching();
    }, []);

  return (
    <SafeAreaView forceInset ={{ top:"always" }}>
        <Text h2>Create a Track</Text>
        <Map /> 
        {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
