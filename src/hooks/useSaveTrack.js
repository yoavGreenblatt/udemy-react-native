// import { useContext } from 'react'
// import { Context as TrackContext } from '../context/TrackContext'
// import { Context as LocationContext } from '../context/LocationContext'

// export default () => {
//     const { createTrack } = useContext(TrackContext);
//     const { state: { locations, name }} = useContext(LocationContext);

//     const saveTrack = () => {
//         createTrack(name, locations);
//     };   
//     return [saveTrack]
// };


// // if we ever have a component inside of our application were we want to save 
// // track from we only have to import useSaveTrack, we will call it and in return were going to get a function that
// // we can call at any point in time to take the name and locations we have and make a request to our backend api 



import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};
