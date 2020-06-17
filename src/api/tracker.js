import axios from 'axios';
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    baseURL: 'http://da83ae32c977.ngrok.io'
});
 
instance.interceptors.request.use(
    // the first function is going to be called automatically anytime that we are about to make a request
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        // if there is a token lets try to throw it inside of one of our headeres on our request object
        // so now if we have a token it will be automatically added into our request
        if (token) {
            config.headers.Authorization = ` Bearer ${token}`
        }
        return config;
    },
    // the second function is going to be called automatically anytime that there is an error with us making the request
    (err) => {
        return Promise.reject(err)
    }
);



// export default instance;


// import axios from 'axios';
// import { AsyncStorage } from 'react-native';

// let url;
// if (__DEV__) {
//   url = 'http://38bb4a21ed05.ngrok.io';
// } else {
//   url = 'https://sleepy-savannah-10606.herokuapp.com';
// }

// const instance = axios.create({
//   baseURL: url
// });

// instance.interceptors.request.use(
//   async config => {
//     const token = await AsyncStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

// export default instance;
