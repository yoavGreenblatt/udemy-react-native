import React, {useContext} from 'react'
import { StyleSheet, Text} from 'react-native'
import { Context as TrackContext} from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'


const TrackDetailScreen = ({ navigation }) => {

    const { state } = useContext(TrackContext);
    // gives us the information about what track the user typed on
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords

    return <>
      <MapView
      initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
      }}
      style= {styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
     </MapView>
    </>
};

const styles = StyleSheet.create({
    map : {
        height: 300
    }
});

export default TrackDetailScreen;