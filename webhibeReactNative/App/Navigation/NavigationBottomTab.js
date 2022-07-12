//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from '../Service/Navigation';
// import Home from '../Screens/Home/Home'


import Materia from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();
const NavigationBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
       
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        tabBarStyle: {
          backgroundColor: '#0E0E0E',
          borderTopWidth: 0,
          elevation: 0
        },
      }}
    >
      {/* <Tab.Screen name='Home' component={Home}
        options={{
          //tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <>
              {focused ?
                <ImageBackground style={{ width: 70, height: 70,alignItems:"center",justifyContent:"center" }} source={require('../Assets/Image/Ellipse6.png')}>
                  <Icon name={'home'} color={focused ? "#ffffff" : "#515151"} size={26} />
                </ImageBackground>
                : <Icon name={'home'} color={focused ? "#ffffff" : "#515151"} size={26} />}
            </>
          ),

        }}
      /> */}

     
   





    </Tab.Navigator>



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
export default NavigationBottomTab;
