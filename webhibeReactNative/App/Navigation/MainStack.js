//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationBottomTab from './NavigationBottomTab';
import Home from '../Screen/Home/Home';
// import Notification from '../Screens/Notification/Notification';
// import Payment from '../Screens/Payment/Payment';
// import VideoScreen from '../Screens/VideroScreen/VideoScreen';



// create a component

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"    screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
          }}>
              <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="dashboardHome" component={NavigationDrawer} /> */}
            <Stack.Screen name="BottomHome" component={NavigationBottomTab} />
            {/* <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="VideoScreen" component={VideoScreen} /> */}
          
          
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainStack;
