import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import {
  TransitionPresets,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';


import Navigation from './App/Service/Navigation';
import AuthStack from './App/Navigation/AuthStack';
import MainStack from './App/Navigation/MainStack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>

      <NavigationContainer ref={r => Navigation.setTopLevelNavigator(r)}>
        <Stack.Navigator
          initialRouteName="AuthLogin"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
          }}>

          {/* <Stack.Screen name="Onbording" component={Onbording} /> */}
          <Stack.Screen name="AuthLogin" component={AuthStack} />
          {/* <Stack.Screen name='MainHome' component={MainStack} /> */}



        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})