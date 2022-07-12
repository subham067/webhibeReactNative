// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
/**
 * @format
 */
 import React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import Store from './App/Redux/store/index';
 import { Provider } from 'react-redux';
 
 const Main = () => {
     return(
         <Provider store={Store}>
             <App/>
         </Provider>
     )
 }
 
 AppRegistry.registerComponent(appName, () => Main);

