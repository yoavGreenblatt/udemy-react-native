import React, {useContext, useState} from 'react';
import { Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContex } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording, 
        stopRecording, 
        changeName } = useContext(LocationContex)

        const [saveTrack] = useSaveTrack();
        
    return ( 
    <>
    <Spacer>
     <Input 
     value= {name}
      placeholder="Enter Name" 
      onChangeText={changeName}
     />
    </Spacer>
    <Spacer>
    {recording 
     ?
      <Button 
         title="Stop" 
         onPress={stopRecording}/>
     :
      <Button 
         title="Start reccording"
         onPress={startRecording}
        />
     }
    </Spacer>
      <Spacer>
    {
     !recording && locations.length
     ? <Button title = "Save Redording" onPress={saveTrack} />
     : null
    }
     </Spacer>
    </>
   );
};

export default TrackForm

// import React, { useContext } from 'react';
// import { Input, Button } from 'react-native-elements';
// import Spacer from './Spacer';
// import { Context as LocationContext } from '../context/LocationContext';
// import useSaveTrack from '../hooks/useSaveTrack';

// const TrackForm = () => {
//   const {
//     state: { name, recording, locations },
//     startRecording,
//     stopRecording,
//     changeName
//   } = useContext(LocationContext);
//   const [saveTrack] = useSaveTrack();

//   return (
//     <>
//       <Spacer>
//         <Input
//           value={name}
//           onChangeText={changeName}
//           placeholder="Enter name"
//         />
//       </Spacer>
//       <Spacer>
//         {recording ? (
//           <Button title="Stop" onPress={stopRecording} />
//         ) : (
//           <Button title="Start Recording" onPress={startRecording} />
//         )}
//       </Spacer>
//       <Spacer>
//         {!recording && locations.length ? (
//           <Button title="Save Recording" onPress={saveTrack} />
//         ) : null}
//       </Spacer>
//     </>
//   );
// };

// export default TrackForm;
