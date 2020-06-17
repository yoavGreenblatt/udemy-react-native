import React, { useContext } from 'react';
import { StyleSheet, Text, ActivityIndicator} from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
//   let points = []
//   for (let i =1; i<20; i++) {
//       // if i is an equal even number 
//   if (i % 2 === 0 ) {
//     points.push({
//         latitude: 37.33233 + i * 0.001,
//         longitude: -122.03121 + i * 0.001
//         });    
//   } else {
//     points.push({
//         latitude: 37.33233 - i * 0.002,
//         longitude: -122.03121 + i * 0.001
//     });    
//    }
//   }

const {state: { currentLocation, locations } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }}/>;
    }

  return (
   <MapView 
    style={ styles.map } 
    //inigial regiion is an indication of what the map should show when it first gets rendered on the screen
    initialRegion={{
    ...currentLocation.coords, // which is our latitude and longitude
      // zoom level  
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
    // // if we want the map to track the user around, whenever we are going to upadte this property, the map will update itself and recenter on the user and re-zoom as well
    // region={{ 
    // ...currentLocation.coords,
    //   latitudeDelta: 0.01,
    //   longitudeDelta: 0.01
    // }}
    >
    <Circle
      center={currentLocation.coords}
      radius={30}
      strokeColor="rgba(158, 158, 255, 1.0)"
      fillColor="rgba(158, 158, 255, 0.3)"
    />
    <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;