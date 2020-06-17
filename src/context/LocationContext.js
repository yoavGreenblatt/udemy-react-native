import createDataContext from './createDataContext';

const locationReducer = (state,action) => {
    switch (action.type) {
        case 'add_current_location':
          return  { ...state, currentLocation: action.payload }
          case 'start_recording':
          return  { ...state, recording: true };
          case 'stop_recording':
          return  { ...state, recording: false };
          case 'add_location_to_array':
          // that is how we modify an array or add a record to it without modifying the original array. wen ever want to mutate our original state object
          return  { ...state, locations: [...state.locations, action.payload] };
          case 'change_name':
          return  { ...state, name: action.payload };
        default:
          return state
    };
};


const changeName = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name });
};

const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording' });
};

const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording' });
};

// we're going to call add location any time we get a location update out of our useLocation hook
// this function gets called anytime we update a user location
const addLocation = dispatch => (location, recording) => {
    // console.log('hi')
    dispatch({ type: 'add_current_location', payload: location });
    if (recording){
        dispatch({ type: 'add_location_to_array', payload: location });
    }
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName },
    { name: '', recording: false, locations: [], currentLocation: null, }
)