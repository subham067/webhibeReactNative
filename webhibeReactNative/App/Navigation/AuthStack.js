//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Auth/Login';
// import ForgotPassword from '../Screen/Auth/Forgotpassword';
// import Verification from '../Screen/Auth/Verification';
// import SignUp from '../Screen/Auth/Signup';
// import EmailVerification from '../Screen/Auth/EmailVerification'
// import PersonalDetails from '../Screen/Auth/PersonalDetails'




// create a component

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login"    screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
          }}>
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="EmailVerification" component={EmailVerification} /> */}
          
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
   
});

//make this component available to the app
export default AuthStack;
