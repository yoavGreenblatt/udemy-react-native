import { useEffect, useState } from 'react'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (shouldTrack, callback) => {
    const [err, setError] = useState(null);
    // const [subscriber, setSubscriber] = useState(null);

    //by puting a value inside the array we are telling react that we might want to run useEffect function more than just when our omponent is rendered on the screen 
    // if our value changes react is going to run startWatiching an additional time
    // if shouldTrack ever changes, lets rerun startWatching

    // useEffect(() => {
    //     startWatching();
    //   }, [shouldTrack]);

     // when the component is rendered to the screen

     // oh, a new version of 'callback', i should return the useEffect function 

      useEffect(() => {
        let subscriber;

        //we now have an input of the callback function to run any time that we get an update
        const startWatching = async () => {
            try {
                const {status} = await requestPermissionsAsync();
                if (status === 'granted') {
                    /* Do location reading stuff we add in a few lectures.
                     * Fortunately watchPositionAsync() actually does throw an error
                     * so we don't need to manually throw one ourselves.
                    */
                   //watching users locatations and changes it over time
                //    const sub = await watchPositionAsync({
                    subscriber = await watchPositionAsync({
                       // getting the best accuracy - consumes battery but gives accuracy of meters
                       accuracy: Accuracy.BestForNavigation,
                       // getting an update once every second
                       timeInterval: 1000,
                       //getting an update once every 10 meters
                       distanceInterval: 10
                       // the callback funtion is going to take some location object from the expo location library, so the location object descrubes the user's actual location
                   }, 
                //    (location) => {
                //        addLocation(location); 
                //     } 
    
                //  we want to customize what happens whenever we get a new location
                       callback
                       );
                    //    subscriber.remove() // which stops the user's tracking
    
                    //getting acces to our subscriber object inside the subscriber variable
                    //   setSubscriber(sub)

                } else {
                    throw new Error('Location permission not granted');
                }
            } catch (err) {
                setError(err);
            }
        }


        if (shouldTrack) {
          startWatching();
        } else {
            // we are expecting subscriber to be an actual subscriber object, and not null. this is a defencing code
            if (subscriber) {
          subscriber.remove();
          // after stopping, we return the subscriber varibale to null, which indicated that if there's no subscriber - there is nothing to stop
        //   setSubscriber(null)
            }
          subscriber = null
        }
        // cleanup function. here we have put some amount of code to stop listetning to the usere's location
        return () => {
         if (subscriber) {
           subscriber.remove()
         }
       };
     }, [shouldTrack, callback]);
      
      // we return an array because we might return multipule values
      return [err];
};

