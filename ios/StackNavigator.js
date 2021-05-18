import React, { useState, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import RecipeScreen from '../screens/RecipeScreen';
import SignInScreen from '../screens/SignInScreen';
import CameraScreen from '../screens/CameraScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PictureScreen from '../screens/PictureScreen';
import SignUpScreen from '../screens/SignUpScreen';

import { UserContext } from '../constants/UserContext';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    const [userData, setUserData] = useState(null);
    const value = useMemo(() => ({userData, setUserData}), [userData, setUserData]);
    return (
        <UserContext.Provider value = {value}>
            <Stack.Navigator>
                <Stack.Screen 
                name="SignIn" 
                component={SignInScreen} 
                options={{ 
                title: "SignIn",
                }}
                />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Recipe" component={RecipeScreen} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Picture" component={PictureScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </UserContext.Provider>
    );
}

export default MainStackNavigator;