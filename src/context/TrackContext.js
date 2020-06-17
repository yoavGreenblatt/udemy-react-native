import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const trackReducer = (state ,action) => {
    switch (action.type) {
        default:
          return state
    };
};

const fetchTracks = dispatch => () => {

}

const createTrack = dispatch => async (name, locations) => {
// console.log(name, locations.length)
await trackerApi.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
{ fetchTracks, createTrack }, 
    // were gonna have a list of different tracks that we will want to eventually display on the screen 
  []
)


// import createDataContext from './createDataContext';
// import trackerApi from '../api/tracker';

// const trackReducer = (state, action) => {
//   switch (action.type) {
//     case 'fetch_tracks':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const fetchTracks = dispatch => async () => {

//   const response = await trackerApi.get('/tracks');
//   dispatch({ type: 'fetch_tracks', payload: response.data });
// };
// const createTrack = dispatch => async (name, locations) => {
//   await trackerApi.post('/tracks', { name, locations });
// };

// export const { Provider, Context } = createDataContext(
//   trackReducer,
//   { fetchTracks, createTrack },
//   []
// );
