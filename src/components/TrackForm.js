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