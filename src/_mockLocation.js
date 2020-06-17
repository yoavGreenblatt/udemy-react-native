//the location library exports a ton of different named functions, by using star as location we're essentially getting a sigle variable that references all those differerent functions 
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001; // that represensts 10 meters in longitude or latitude

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude : 5,
            longitude: 35.21367953162194 + increment * tenMetersWithDegrees,
            latitude: 31.778514012723953 + increment * tenMetersWithDegrees,
        }
    }
};

// so whenever we import this file into our project, once every second were going to emit an event directly into lovation and were faking ous as though the useres location had changed in the real world 

let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000); //running this once every second